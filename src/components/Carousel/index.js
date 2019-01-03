import React, { Component } from 'react'
import { Container, ArmWrapper } from './styles'
import { Draggable, TweenMax } from 'gsap/all'

import ContentWrapper from '$components/Layout/ContentWrapper'
import ArmAnimation from '$components/Animations/Carousel/Arm'

let ThrowProps
export default class Carousel extends Component {
    atoms = {}
    state = {
        padding: 24,
        intervalId: null,
        carouselElements: [],
        didDrag: false,
    }

    componentDidMount() {
        ThrowProps = require('../../lib/vendor/ThrowPropsPlugin')
        this.setState(state => {
            return {
                carouselElements: Object.values(this.atoms),
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
        const { carouselElements } = this.state

        if (carouselElements !== prevState.carouselElements) {
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

    next = () => {}

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
                <ArmWrapper didDrag={this.state.didDrag}>
                    <ArmAnimation animationElement={this.container} />
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
                    {React.Children.map(this.props.children, (element, id) => {
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
                                    height: this.props.maxHeight,
                                    borderRadius: true,
                                    shadow: true,
                                    isCarousel: true,
                                })}
                            </div>
                        )
                    })}
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

Carousel.defaultProps = {
    shouldRotate: true,
    rotateInterval: 4000,
    maxHeight: window.innerHeight > 600 ? 540 : window.innerHeight * 0.8,
}
