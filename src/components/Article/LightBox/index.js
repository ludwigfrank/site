import React, { Component } from 'react'
import PropTypes from 'prop-types'

import EventsWrapper from './EventsWrapper'
import Controls from './Controls'
import Image from './Image'

import { createPortal } from 'react-dom'
import { easing, tween, styler } from 'popmotion'

class LightBox extends Component {
    divStylerRight = null
    constructor(props) {
        super(props)
    }

    static propTypes = {
        currentImage: PropTypes.object,
        images: PropTypes.array,
        isOpen: PropTypes.bool,
    }

    static defaultProps = {
        onPrevClick: () => console.log('Previous image click.'),
        onNextClick: () => console.log('Next image click.'),
        isOpen: false,
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyboardInput)
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleKeyboardInput)
    }

    nextImage = event => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }

        tween({
            from: { x: 0, scale: 1 },
            to: { x: 0, scale: 0.9 },
            duration: 150,
            elapsed: 400,
            // loop: 1,
            yoyo: 1,
        }).start(styler(document.getElementById('arrow-right')).set)

        this.props.onNextClick()
    }

    prevImage = event => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }

        tween({
            from: { x: 0, scale: 1 },
            to: { x: 0, scale: 0.9 },
            duration: 150,
            elapsed: 400,
            // loop: 1,
            yoyo: 1,
        }).start(styler(document.getElementById('arrow-left')).set)

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

    renderImage = () => {
        const { currentImage, images, onImageClick } = this.props

        return (
            <div>
                <Image
                    image={currentImage}
                    onRightSwipe={this.nextImage}
                    onLeftSwipe={this.prevImage}
                    onUpSwipe={this.props.onClose}
                    onClickAway={this.props.onClose}
                />

                <Controls
                    onNextClick={this.nextImage}
                    onPrevClick={this.prevImage}
                    onCloseClick={this.props.onClose}
                />
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
