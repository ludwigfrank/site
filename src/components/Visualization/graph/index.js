import React, { PureComponent, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import {
    createSimulation,
    updateSimulation,
    requestAnimationFrame,
} from './utils'

export const DEFAULT_SIMULATION_PROPS = {
    animate: false,
    width: 900,
    height: 600,
    strength: {},
}

export const isNode = child => {
    return child.props && child.props.node
}

export const isLink = child => {
    return child.props && child.props.link
}

export default class Graph extends PureComponent {
    static get propTypes() {
        return {
            labelOffset: PropTypes.objectOf(PropTypes.func),
            createSimulation: PropTypes.func,
            updateSimulation: PropTypes.func,
            simulationOptions: PropTypes.object,
        }
    }

    static get defaultProps() {
        return {
            labelOffset: {
                x: ({ radius = 5 }) => radius / 2,
                y: ({ radius = 5 }) => -radius / 4,
            },
            createSimulation,
            updateSimulation,
            simulationOptions: DEFAULT_SIMULATION_PROPS,
        }
    }

    static getDataFromChildren(children) {
        const data = { nodes: [], links: [] }

        Children.forEach(children, child => {
            if (isNode(child)) {
                data.nodes.push(child.props.node)
            } else if (isLink(child)) {
                data.links.push(child.props.link)
            }
        })

        return data
    }

    /**
     * return a map of nodeIds to node positions.
     * @param {object} simulation - d3-force simulation
     * @return {object} map of nodeIds to positions
     */
    static getNodePositions(simulation) {
        return simulation.nodes().reduce(
            (obj, node) =>
                Object.assign(obj, {
                    [forceUtils.nodeId(node)]: {
                        cx: node.fx || node.x,
                        cy: node.fy || node.y,
                    },
                }),
            {}
        )
    }

    /**
     * return a map of nodeIds to node positions.
     * @param {object} simulation - d3-force simulation
     * @return {object} map of linkIds to positions
     */
    static getLinkPositions(simulation) {
        return simulation
            .force('link')
            .links()
            .reduce(
                (obj, link) =>
                    Object.assign(obj, {
                        [forceUtils.linkId(link)]: {
                            x1: link.source.x,
                            y1: link.source.y,
                            x2: link.target.x,
                            y2: link.target.y,
                        },
                    }),
                {}
            )
    }

    constructor(props) {
        super(props)

        const { createSimulation, simulationOptions } = props

        const data = this.getDataFromChildren()

        this.simulation = createSimulation({
            ...DEFAULT_SIMULATION_PROPS,
            ...simulationOptions,
            data,
        })

        this.state = {
            linkPositions: {},
            nodePositions: {},
            scale: 1,
        }

        this.bindSimulationTick()
    }

    componentDidMount() {
        this.updateSimulation()
    }

    componentWillReceiveProps(nextProps) {
        this.lastUpdated = new Date()
        this.updateSimulation(nextProps)
    }

    componentWillUnmount() {
        this.unbindSimulationTick()
    }

    onSimulationTick() {
        this.frame = requestAnimationFrame(this.updatePositions.bind(this))
    }

    onZoom(event, scale, ...args) {
        const {
            zoomOptions: { onZoom: _onZoom = () => {} },
        } = this.props
        _onZoom(event, scale, ...args)
        this.setState({ scale })
    }

    onPan(...args) {
        const {
            zoomOptions: { onPan: _onPan = () => {} },
        } = this.props
        _onPan(...args)
    }

    getDataFromChildren(props = this.props, force = false) {
        if (!force && (this.cachedData && new Date() > this.lastUpdated)) {
            return this.cachedData
        }

        const data = ForceGraph.getDataFromChildren(props.children)

        Object.assign(this, { cachedData: data, lastUpdated: new Date() })

        return data
    }

    bindSimulationTick = () => {
        this.simulation.on('tick', this.updateSimulation)
    }

    unbindSimulationTick() {
        this.simulation.on('tick', null)
        this.frame = this.frame && rafUtils.cancelAnimationFrame(this.frame)
    }

    updateSimulation = (props = this.props) => {
        const { simulation } = this
        const { updateSimulation, simulationOptions } = props

        this.simulation = updateSimulation(simulation, {
            ...DEFAULT_SIMULATION_PROPS,
            ...simulationOptions,
            data: this.getDataFromChildren(props, true),
        })

        this.onSimulationTick()
    }

    updatePositions() {
        this.setState({
            linkPositions: ForceGraph.getLinkPositions(this.simulation),
            nodePositions: ForceGraph.getNodePositions(this.simulation),
        })
    }

    scale(number) {
        return typeof number === 'number' ? number / this.state.scale : number
    }

    render() {
        const {
            children,
            className,
            labelAttr,
            labelOffset,
            showLabels,
            simulationOptions,
            zoomOptions,
            zoom,
        } = this.props

        const { linkPositions, nodePositions } = this.state

        const {
            height = DEFAULT_SIMULATION_PROPS.height,
            width = DEFAULT_SIMULATION_PROPS.width,
        } = simulationOptions

        const nodeElements = []
        const labelElements = []
        const linkElements = []
        const zoomableChildren = []
        const staticChildren = []
        const maxPanWidth = reduce(
            nodePositions,
            (maxWidth, { cx }) =>
                maxWidth > Math.abs(cx) ? maxWidth : Math.abs(cx),
            0
        )
        const maxPanHeight = reduce(
            nodePositions,
            (maxHeight, { cy }) =>
                maxHeight > Math.abs(cy) ? maxHeight : Math.abs(cy),
            0
        )

        // build up the real children to render by iterating through the provided children
        Children.forEach(children, (child, idx) => {
            if (isNode(child)) {
                const {
                    node,
                    showLabel,
                    labelClass,
                    labelStyle = {},
                    strokeWidth,
                } = child.props
                const nodePosition = nodePositions[forceUtils.nodeId(node)]

                nodeElements.push(
                    cloneElement(child, {
                        ...nodePosition,
                        scale: this.state.scale,
                        strokeWidth: this.scale(strokeWidth),
                    })
                )

                if ((showLabels || showLabel) && nodePosition) {
                    const { fontSize, ...spreadableLabelStyle } = labelStyle
                    labelElements.push(
                        <text
                            className={`rv-force__label ${labelClass}`}
                            key={`${forceUtils.nodeId(node)}-label`}
                            x={nodePosition.cx + labelOffset.x(node)}
                            y={nodePosition.cy + labelOffset.y(node)}
                            fontSize={this.scale(fontSize)}
                            style={spreadableLabelStyle}
                        >
                            {node[labelAttr]}
                        </text>
                    )
                }
            } else if (isLink(child)) {
                const { link } = child.props
                const { strokeWidth } = link
                const linkPosition = linkPositions[forceUtils.linkId(link)]

                linkElements.push(
                    cloneElement(child, {
                        ...linkPosition,
                        strokeWidth: this.scale(strokeWidth),
                    })
                )
            } else {
                const {
                    props: { zoomable },
                } = child
                if (zoom && zoomable) {
                    zoomableChildren.push(
                        cloneElement(child, {
                            key: child.key || `zoomable-${idx}`,
                        })
                    )
                } else {
                    staticChildren.push(
                        cloneElement(child, {
                            key: child.key || `static-${idx}`,
                        })
                    )
                }
            }
        })

        return (
            <svg
                className={`rv-force__svg ${className}`}
                width={width}
                height={height}
            >
                <g className="rv-force__static-elements">{staticChildren}</g>

                <g className="rv-force__zoomable-elements">
                    {zoomableChildren}
                </g>
                <g className="rv-force__links">{linkElements}</g>
                <g className="rv-force__nodes">{nodeElements}</g>
                <g className="rv-force__labels">{labelElements}</g>
            </svg>
        )
    }
}
