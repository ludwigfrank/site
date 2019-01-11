import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Draggable, TweenMax } from 'gsap/all'

import { Wrapper } from './styles'

export default class DragWrapper extends Component {
    width = 0
    height = 0

    constructor(props) {
        super(props)

        this.position = {}
        this.draggable = null
        this.draggableRef = React.createRef()
        this.constraintRef = React.createRef()
    }

    static propTypes = {
        onRightSwipe: PropTypes.func,
        onLeftSwipe: PropTypes.func,
        onUpSwipe: PropTypes.func,
    }

    static defaultProps = {
        onRightSwipe: () => console.log('Right swiped'),
        onLeftSwipe: () => console.log('Left Swipe'),
        onUpSwipe: () => console.log('Up Swipe'),
    }

    componentDidMount() {
        require('../../../../../lib/vendor/ThrowPropsPlugin')

        this.width = this.constraintRef.current.getBoundingClientRect().width
        this.height = this.constraintRef.current.getBoundingClientRect().height

        this.initDraggable()
    }

    initDraggable = () => {
        const self = this
        this.draggable = Draggable.create(this.draggableRef.current, {
            bounds: this.constraintRef.current,
            throwProps: true,
            edgeResistance: 0.95,
            onDragStart: e => this.handleDragStart(e),
            onDragEnd: e => this.handleDragEnd(e),
            onClick: e => self.props.onClick(e),
        })
    }

    handleDragStart = event => {
        const { x, y } = event
        this.position = { x, y }
    }

    handleDragEnd = event => {
        const { x, y } = event

        const threshHold = 300

        if (this.props.zoom === 1) {
            if (x - this.position.x > threshHold) {
                this.props.onRightSwipe()
            }

            if (x - this.position.x < -threshHold) {
                this.props.onLeftSwipe()
            }

            if (y - this.position.y < -threshHold) {
                this.props.onUpSwipe()
            }
        }
    }

    render() {
        return (
            <Wrapper>
                <div
                    ref={this.constraintRef}
                    style={{
                        transform: `scale(${
                            this.props.zoom !== 1 ? this.props.zoom * 2 : 1
                        })`,
                    }}
                >
                    <div
                        style={{
                            transform: `scale(${
                                this.props.zoom !== 1 ? this.props.zoom / 8 : 1
                            })`,
                        }}
                    >
                        <div
                            ref={this.draggableRef}
                            id="image"
                            style={{
                                zIndex: 10000,
                                userSelect: 'all',
                            }}
                        >
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
