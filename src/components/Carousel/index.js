import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, ArmWrapper } from './styles'
import { Draggable, TweenMax } from 'gsap/all'

import ContentWrapper from '$components/Layout/ContentWrapper'

let ThrowProps

const paths = {
    armOne:
        'M24,264.81 C20.83,244.32 14.51,195.23 9.55,150.33 C5.55,114.22 2.48,80.82 2.63,67.19 C1,26.92 0.89,34 1.05,22.87 C1.09,20.8 1.2,17 6,16.19 C9.81,15.54 11.82,19.36 12,23.37 C12.24,28.78 12.91,45.05 13.87,44.92 C14.83,44.79 16.58,12.36 16.52,8.23 C16.45,3.3 17.39,0.62 21.05,0.07 C25,-0.53 27.37,3 27.4,6.82 C27.45,11.97 27.19,42.07 28.07,40.92 C28.95,39.77 34.07,13.19 34.64,8.92 C35.21,4.65 38.74,1.28 41.71,1.92 C44.68,2.56 46.43,6.21 45.83,10.44 C45.23,14.67 39.09,56 42,55.63 C44.91,55.26 53.65,44.7 56.36,42.26 C59.07,39.82 62.03,40.45 63.17,42.38 C64.31,44.31 66.49,47.11 61.17,53.02 C55.85,58.93 42.79,76.28 42.79,76.28 C42.79,76.28 44.03,101 49.79,146.48 C53.63,177 59.52,217 68.44,265.11',
    armTwo:
        'M16.32,268.46 C13.15,248 -2.88,198.91 1.87,154 C6.21,113 17.21,81 20,65.85 C24.43,41.36 25.31,27.85 27.26,20 C28.26,16 30.26,15 33.26,15 C35.26,15 37.94,16.93 37.26,21 C36.26,27 33.26,44.13 34.26,44 C35.26,43.87 41.45,11.05 42.26,7 C43.26,2 46.26,0 49.26,0 C53.26,0 54.26,3.16 54.26,7 C54.26,12.15 46.39,42.15 47.26,41 C48.13,39.85 56.68,12 58.26,8 C60.26,3 63.26,0.36 66.26,1 C69.26,1.64 71.26,6 69.26,12 C67.91,16.06 56.51,54.68 59.39,54.29 C62.27,53.9 71,43.36 73.73,40.92 C76.46,38.48 81.07,39.08 82.21,41 C83.35,42.92 83.86,45.77 78.54,51.68 C73.22,57.59 60.16,74.94 60.16,74.94 C60.16,74.94 47.07,102.57 42.16,150.13 C38.21,188 51.89,220.65 60.81,268.77',
    armThree:
        'M24.7 264.7C22.6 255.2 19.6 248.2 18.3 218.2C15.3 152.2 44.5 122 54.7 113C83.6 84.9 78.3 89.5 86.6 82.2C88.2 80.8 91.1 78.4 94.9 81.4C97.9 83.8 96.4 87.8 93.6 90.7C89.7 94.5 78 105.9 78.8 106.5C79.5 107.1 104.8 86.7 107.8 83.9C111.4 80.5 114 79.5 116.9 81.8C120 84.3 119 88.5 116.1 91.1C112.3 94.6 89.8 114.5 91.2 114.4C92.6 114.3 115.8 100.3 119.3 97.9C122.9 95.5 127.7 95.8 129.2 98.5C130.7 101.1 129.2 104.9 125.6 107.3C122 109.7 87.2 132.8 89.5 134.6C91.7 136.5 105.4 136 109.1 136.3C112.7 136.7 114.2 139.3 113.6 141.4C112.9 143.5 112.3 147 104.4 147C96.4 147 74.8 148.9 74.8 148.9C74.8 148.9 54.1 168.7 58.4 214.3C60.5 236.2 61.5 238.2 69.1 264.9',
}

const Arm = styled('path')`
    fill: #f8f6f6;
    stroke: #1a0641;
    stroke-width: 2px;
`
export default class Carousel extends Component {
    constructor(props) {
        super(props)

        this.myRef = React.createRef()

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
        let padding = 24

        try {
            height > window.innerHeight * 0.5
                ? (height = window.innerHeight * 0.5)
                : (height = height)

            if (window.innerWidth < 600) padding = 16
        } catch (e) {
            console.log(e)
        }

        this.setState(state => {
            return {
                carouselElements: Object.values(this.atoms),
                maxHeight: height,
                padding: padding,
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
        const isVisible = !this.state.didDrag

        /*
        if (this.myRef.current) {
            TweenMax.to(this.myRef.current, 1, {
                attr: {
                    d: isVisible ? paths.armTwo : paths.armThree,
                },
                opacity: isVisible ? 1 : 0,
                ease: isVisible ? 'ease-in-out' : 'ease-out',
                repeat: isVisible ? -1 : 0,
                yoyo: isVisible ? true : false,
            })
        }*/

        return (
            <div
                ref={element => (this.heightWrapper = element)}
                style={{ position: 'relative' }}
            >
                <ArmWrapper didDrag={this.state.didDrag}>
                    <div id="arm-two">
                        <svg
                            viewBox="0 0 116 273"
                            width="120"
                            overflow="overlay"
                        >
                            <Arm id="arm" ref={this.myRef} d={paths.armOne}>
                                {this.myRef.current && !this.state.didDrag && (
                                    <animate
                                        attributeName="d"
                                        attributeType="XML"
                                        repeatCount="indefinite"
                                        fill="freeze"
                                        animation-timing-function="ease-out"
                                        dur="2s"
                                        values={`${paths.armOne};${
                                            paths.armTwo
                                        };${paths.armOne};`}
                                    />
                                )}

                                {this.state.didDrag && (
                                    // hide animation on drag
                                    <animate
                                        attributeName="d"
                                        attributeType="XML"
                                        fill="freeze"
                                        animation-timing-function="ease-out"
                                        dur="500ms"
                                        values={`${paths.armTwo}; ${
                                            paths.armThree
                                        };`}
                                    />
                                )}
                            </Arm>
                        </svg>
                    </div>
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
