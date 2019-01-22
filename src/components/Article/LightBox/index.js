import React, { Component } from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs'

import EventsWrapper from './EventsWrapper'
import Controls from './Controls'
import Image from './Image'

import { createPortal } from 'react-dom'
import { TweenMax, Power4 } from 'gsap/all'
import { easing, tween, styler } from 'popmotion'

const animation = (element, s) => {
    s.animationFinished = false
    TweenMax.to(document.getElementById(element), 0.1, {
        backgroundColor: '#00',
        scale: 0.65,
        yoyo: 1,
        repeat: 1,
        yoyo: true,
        onComplete: () => (s.animationFinished = true),
    })
}

class LightBox extends Component {
    animationFinished = true

    static propTypes = {
        currentImage: PropTypes.object,
        images: PropTypes.array,
        isOpen: PropTypes.bool,
        controls: PropTypes.bool,
    }

    static defaultProps = {
        onPrevClick: () => console.log('Previous image click.'),
        onNextClick: () => console.log('Next image click.'),
        isOpen: false,
        controls: true,
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyboardInput)
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleKeyboardInput)
        window.removeEventListener('scroll', this.handleScroll)
    }

    nextImage = event => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }

        this.animationFinished && animation('arrow-right', this)
        this.props.onNextClick()
    }

    prevImage = event => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }

        this.animationFinished && animation('arrow-left', this)
        this.props.onPrevClick()
    }

    close = event => {
        if (event.target.id === 'lightbox' || event.target.tagName === 'FIGURE')
            this.props.onClose()
    }

    handleKeyboardInput = event => {
        event.stopImmediatePropagation()
        if (event.keyCode === 37) {
            // left
            this.prevImage(event)
            return true
        } else if (event.keyCode === 39) {
            // right
            this.nextImage(event)
            return true
        } else if (event.keyCode === 27) {
            // esc
            this.props.onClose()
            return true
        }

        return false
    }

    handleScroll = event => {
        this.props.onClose()
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextProps.isOpen !== this.props.isOpen) return true
        if (nextProps.currentImage !== this.props.currentImage) return true

        return false
    }

    renderImage = () => {
        const { currentImage, images, controls, onImageClick } = this.props

        return (
            <div>
                <Image
                    key={currentImage.src + 'lightbox'}
                    image={currentImage}
                    onRightSwipe={this.nextImage}
                    onLeftSwipe={this.prevImage}
                    onUpSwipe={this.props.onClose}
                    onClickAway={this.props.onClose}
                />

                {controls && (
                    <Controls
                        onNextClick={this.nextImage}
                        onPrevClick={this.prevImage}
                        onCloseClick={this.props.onClose}
                    />
                )}
            </div>
        )
    }

    render() {
        return this.props.isOpen
            ? [
                  createPortal(this.renderImage(), document.body),
                  <EventsWrapper />,
              ]
            : null
    }
}

export default LightBox
