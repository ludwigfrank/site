import React, { Component } from 'react'
import { TweenMax, Power4 } from 'gsap'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import Observer from '@researchgate/react-intersection-observer'

const ImageOuterWrapper = styled('div')`
    overflow: hidden;
    pointer-events: none;
`

const ImageWrapper = styled('div')`
    transform: scale(1.2);
`

const windowHeight = window.innerHeight
const nodeHeight = node => node.clientHeight
const getPercentage = (startPos, endPos, currentPos) => {
    const distance = endPos - startPos
    const displacement = currentPos - startPos
    return displacement / distance
}

const getRelativePosition = node => {
    const { top, height } = node.getBoundingClientRect()
    const y = Math.round(top > height ? height : top)

    return getPercentage(-height, height, y)
}

class ParallaxImage extends Component {
    state = {
        isIntersecting: false,
        strength: 0.9,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = e => {
        if (!this.state.isIntersecting) return
        if (this.image === null) return
        const { y, height } = this.image.getBoundingClientRect()
        const endPos = -height
        const startPos = window.innerHeight + height
        const currentPos = y
        const percentage = 0.5 - getPercentage(startPos, endPos, currentPos)

        TweenMax.to(this.image, 1, {
            ease: Power4.easeOut,
            y: 80 * percentage,
        })
    }

    handleObserverChange = e => {
        this.setState({
            isIntersecting: e.isIntersecting,
        })
    }

    render() {
        const { fluid, hovered } = this.props
        const { isIntersecting } = this.state
        return (
            <Observer onChange={this.handleObserverChange}>
                <ImageOuterWrapper>
                    <ImageWrapper
                        isIntersecting={isIntersecting}
                        ref={image => (this.image = image)}
                    >
                        <Img fluid={fluid} />
                    </ImageWrapper>
                </ImageOuterWrapper>
            </Observer>
        )
    }
}

ParallaxImage.propTypes = {
    fluid: PropTypes.object,
}

export default ParallaxImage
