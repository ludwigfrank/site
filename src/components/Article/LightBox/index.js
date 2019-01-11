import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import EventsWrapper from './EventsWrapper'
import DragWrapper from './DragWrapper'
import Controls from './Controls'
import ClickAwayListener from '$components/ClickAwayListener'
import { Description } from '$components/Text'
import { TweenMax, Power3 } from 'gsap/all'

import { createPortal } from 'react-dom'

class LightBox extends Component {
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

        TweenMax.fromTo(
            document.getElementById('arrow-right'),
            0.15,
            {
                x: 0,
                scale: 1,
            },
            {
                scale: 0.1,
                x: 15,
                repeat: 1,
                yoyo: true,
                ease: Power3.easeIn,
            }
        )

        this.props.onNextClick()
    }

    prevImage = event => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }

        TweenMax.fromTo(
            document.getElementById('arrow-left'),
            0.15,
            {
                x: 0,
                scale: 1,
            },
            {
                scale: 0.1,
                x: -15,
                repeat: 1,
                yoyo: true,
                ease: Power3.easeIn,
            }
        )

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
        const heightOffset = '80px'

        const {
            presentationWidth,
            presentationHeight,
            aspectRatio,
        } = currentImage.childImageSharp.fluid

        let h = presentationHeight
        let w = presentationWidth

        try {
            if (h > window.innerHeight * 0.85) {
                h = window.innerHeight * 0.85
                w = h * aspectRatio
            }

            if (w > window.innerWidth * 0.85) {
                w = window.innerWidth * 0.85
                h = w / aspectRatio
            }
        } catch (e) {
            console.log(e)
        }

        return (
            <div>
                <DragWrapper
                    onRightSwipe={this.nextImage}
                    onLeftSwipe={this.prevImage}
                    onUpSwipe={this.props.onClose}
                >
                    <ClickAwayListener onClickAway={() => this.props.onClose()}>
                        <Image
                            fluid={currentImage.childImageSharp.fluid}
                            style={{
                                maxHeight: `calc(100vh - ${heightOffset})`,
                                width: `${w}px`,
                                height: `${h}px`,
                            }}
                            critical={true}
                        />
                        {currentImage.description && (
                            <figcaption>
                                <Description align={'center'} strip mt={3}>
                                    {currentImage.description}
                                </Description>
                            </figcaption>
                        )}
                    </ClickAwayListener>
                </DragWrapper>
                <Controls
                    onNextClick={this.nextImage}
                    onPrevClick={this.prevImage}
                    onCloseClick={this.props.onClose}
                />
            </div>
        )
    }

    render() {
        console.log('rerender')
        return this.props.isOpen
            ? [
                  createPortal(this.renderImage(), document.body),
                  <EventsWrapper />,
              ]
            : null
    }
}

export default LightBox
