import React, { Component } from 'react' // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types'
import shouldUpdate from './shouldUpdate'
import styled from 'styled-components'

const noop = () => {}

const Inner = styled('div')`
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    position: fixed;
    transform: translateY(${props => props.translateY});
    transition: ${props => props.theme.animation.create()};
`

export default class Headroom extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired,
        upTolerance: PropTypes.number,
        downTolerance: PropTypes.number,
        onPin: PropTypes.func,
        onUnpin: PropTypes.func,
        onUnfix: PropTypes.func,
        pinStart: PropTypes.number,
        calcHeightOnResize: PropTypes.bool,
        unPinOnStart: PropTypes.bool,
        disable: PropTypes.bool,
    }

    static defaultProps = {
        upTolerance: 20,
        downTolerance: 10,
        parent: () => window,
        onPin: noop,
        onUnpin: noop,
        onUnfix: noop,
        pinStart: 0,
        calcHeightOnResize: true,
        unPinOnStart: false,
    }

    constructor(props) {
        super(props)
        // Class variables.
        this.currentScrollY = 0
        this.lastKnownScrollY = 0
        this.scrollTicking = false
        this.resizeTicking = false
        this.state = {
            state: 'unfixed',
            translateY: this.props.unPinOnStart ? '-100%' : 0,
        }
    }

    componentDidMount() {
        this.setHeightOffset()
        if (!this.props.disable) {
            this.props.parent().addEventListener('scroll', this.handleScroll)

            if (this.props.calcHeightOnResize) {
                this.props
                    .parent()
                    .addEventListener('resize', this.handleResize)
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.disable && !this.props.disable) {
            this.unfix()
            this.props.parent().removeEventListener('scroll', this.handleScroll)
            this.props.parent().removeEventListener('resize', this.handleResize)
        } else if (!nextProps.disable && this.props.disable) {
            this.props.parent().addEventListener('scroll', this.handleScroll)

            if (this.props.calcHeightOnResize) {
                this.props
                    .parent()
                    .addEventListener('resize', this.handleResize)
            }
        }
    }

    componentDidUpdate(prevProps) {
        // If children have changed, remeasure height.
        if (prevProps.children !== this.props.children) {
            this.setHeightOffset()
        }
    }

    componentWillUnmount() {
        this.props.parent().removeEventListener('scroll', this.handleScroll)
        this.props.parent().removeEventListener('resize', this.handleResize)
    }

    setHeightOffset = () => {
        this.setState({ height: this.inner.offsetHeight })
        this.resizeTicking = false
    }

    getScrollY = () => {
        if (this.props.parent().pageYOffset !== undefined) {
            return this.props.parent().pageYOffset
        } else if (this.props.parent().scrollTop !== undefined) {
            return this.props.parent().scrollTop
        } else {
            return (
                document.documentElement ||
                document.body.parentNode ||
                document.body
            ).scrollTop
        }
    }

    handleScroll = () => {
        if (!this.scrollTicking) {
            this.scrollTicking = true
            requestAnimationFrame(this.update)
        }
    }

    handleResize = () => {
        if (!this.resizeTicking) {
            this.resizeTicking = true
            requestAnimationFrame(this.setHeightOffset)
        }
    }

    unpin = () => {
        this.props.onUnpin()
        this.setState(
            {
                translateY: '-100%',
            },
            () => {
                setTimeout(() => {
                    this.setState({ state: 'unpinned' })
                }, 0)
            }
        )
    }

    pin = () => {
        this.props.onPin()

        this.setState({
            translateY: 0,
            state: 'pinned',
        })
    }

    unfix = () => {
        this.props.onUnfix()

        this.setState({
            translateY: 0,
            state: 'unfixed',
        })
    }

    update = () => {
        this.currentScrollY = this.getScrollY()

        const { action } = shouldUpdate(
            this.lastKnownScrollY,
            this.currentScrollY,
            this.props,
            this.state
        )

        if (action === 'pin') {
            this.pin()
        } else if (action === 'unpin') {
            this.unpin()
        } else if (action === 'unfix') {
            this.unfix()
        }

        this.lastKnownScrollY = this.currentScrollY
        this.scrollTicking = false
    }

    render() {
        const { state, translateY } = this.state
        const { disabled, children } = this.props

        return (
            <Inner
                ref={element => (this.inner = element)}
                state={state}
                disabled={disabled}
                translateY={translateY}
            >
                {children}
            </Inner>
        )
    }
}
