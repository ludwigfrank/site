import React, { Component } from 'react'
import PropTypes from 'prop-types'

import EventsWrapper from './EventsWrapper'
import Controls from './Controls'
import Image from './Image'

import { createPortal } from 'react-dom'
import { TweenMax, Power4 } from 'gsap/all'
import { easing, tween, styler } from 'popmotion'

class LightBox extends Component {
    state = {
        render: true,
    }

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

        TweenMax.to(document.getElementById('arrow-right'), 0.1, {
            backgroundColor: '#00',
            scale: 0.75,
            yoyo: 1,
            repeat: 1,
            yoyo: true,
        })

        this.props.onNextClick()
    }

    prevImage = event => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }

        TweenMax.to(document.getElementById('arrow-right'), 0.1, {
            backgroundColor: '#00',
            scale: 0.75,
            yoyo: 1,
            repeat: 1,
            yoyo: true,
        })

        this.props.onPrevClick()
    }

    close = event => {
        if (event.target.id === 'lightbox' || event.target.tagName === 'FIGURE')
            this.props.onClose()
    }

    handleKeyboardInput = event => {
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

    renderImage = () => {
        const { currentImage, images, controls, onImageClick } = this.props

        return (
            <div>
                <Image
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
