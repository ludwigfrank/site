import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, ArmWrapper } from './styles'
import { Draggable, TweenMax } from 'gsap/all'

import ContentWrapper from '$components/Layout/ContentWrapper'
import ArmAnimation from '$components/Animations/Carousel/Arm'

let ThrowProps
export default class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            padding: 24,
            intervalId: null,
            carouselElements: [],
            didDrag: false,
            maxHeight: props.maxHeight,
        }
    }
    atoms = {}

    static propTypes = {
        images: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    }

    static defaultProps = {
        shouldRotate: true,
        rotateInterval: 4000,
        maxHeight: 600,
        images: false,
    }

    componentDidMount() {
        ThrowProps = require('../../lib/vendor/ThrowPropsPlugin')

        let height = this.props.maxHeight

        try {
            height > window.innerHeight * 0.5
                ? (height = window.innerHeight * 0.5)
                : (height = height)
        } catch (e) {
            console.log(e)
        }

        this.setState(state => {
            return {
                carouselElements: Object.values(this.atoms),
                maxHeight: height,
            }
        })

        const self = this

        this.draggableInstance = Draggable.create(this.container, {
            type: 'x',
            throwProps: true,
            edgeResistance: 0.95,
            zIndexBoost: false,
            onDragStart: () => {
                self.setState({ didDrag: true })
            },
        })

        if (this.props.shouldRotate) {
            const intervalId = setInterval(
                this.timer,
                this.props.rotateInterval
            )

            this.setState({ intervalId })
        }

        TweenMax.to(this.container, 1, {
            x: 20,
            yoyo: true,
            repeat: -1,
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { carouselElements, maxHeight } = this.state

        if (
            carouselElements !== prevState.carouselElements ||
            maxHeight !== prevState.maxHeight
        ) {
            let outerWidth = 0

            carouselElements.forEach(element => {
                TweenMax.set(element, {
                    display: 'inline-block',
                    marginRight: `${this.state.padding}px`,
                })

                outerWidth +=
                    element.getBoundingClientRect().width + this.state.padding

                this.calculateSize()
            })
        }
    }

    calculateSize = () => {
        let totalWidth = 0

        this.state.carouselElements.forEach(element => {
            totalWidth += element.offsetWidth + this.state.padding
        })

        const minX =
            this.container.offsetWidth - totalWidth + this.state.padding
        const maxX = 0

        this.draggableInstance[0].applyBounds({ minX, maxX })
    }

    renderContent = () => {
        return (
            <div
                ref={element => (this.heightWrapper = element)}
                style={{ position: 'relative' }}
            >
                <ArmWrapper didDrag={false}>
                    <ArmAnimation isVisible={!this.state.didDrag} />
                </ArmWrapper>
                <div
                    key="position-ref"
                    ref={element => (this.positionRef = element)}
                />
                <Container
                    ref={element => (this.container = element)}
                    key="slider"
                    my={[5]}
                >
                    {this.props.children.length > 1 ? (
                        React.Children.map(
                            this.props.children,
                            (element, id) => {
                                return (
                                    <div
                                        key={id}
                                        style={{
                                            display: 'inline-block',
                                        }}
                                        ref={element => {
                                            this.atoms[id] = element
                                        }}
                                    >
                                        {React.cloneElement(element, {
                                            height: this.state.maxHeight,
                                            maxHeight: '60vh',
                                            borderRadius: true,
                                            shadow: true,
                                            isCarousel: true,
                                        })}
                                    </div>
                                )
                            }
                        )
                    ) : (
                        <div />
                    )}
                </Container>
            </div>
        )
    }

    render() {
        if (this.props.wrapper)
            return <ContentWrapper>{this.renderContent()}</ContentWrapper>
        return this.renderContent()
    }
}
