import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import Observer from '@researchgate/react-intersection-observer'

try {
    require('intersection-observer')
} catch (error) {
    console.log(error)
}

const ImageOuterWrapper = styled('div')`
    overflow: hidden;
    pointer-events: none;
`

const ImageWrapper = styled('div')`
    transform: scale(1.2);
`

const getPercentage = (startPos, endPos, currentPos) => {
    const distance = endPos - startPos
    const displacement = currentPos - startPos
    return displacement / distance
}

let TweenMax,
    Power4 = null
class ParallaxImage extends Component {
    state = {
        isIntersecting: false,
        strength: 0.9,
    }

    componentDidMount() {
        import('gsap').then(res => (TweenMax = res.TweenMax))
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

        if (TweenMax !== null && typeof TweenMax !== 'undefined') {
            TweenMax.to(this.image, 1, {
                ease: 'easeInOut',
                y: 80 * percentage,
            })
        }
    }

    handleObserverChange = e => {
        this.setState({
            isIntersecting: e.isIntersecting,
        })
    }

    render() {
        const { fluid } = this.props
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
