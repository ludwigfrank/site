import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GatsbyImage from 'gatsby-image'

import ClickAwayListener from '$components/ClickAwayListener'
import { Description } from '$components/Text'
import DragWrapper from './DragWrapper'

export default class Image extends Component {
    state = {
        zoom: 1,
    }

    static propTypes = {
        onRightSwipe: PropTypes.func,
        onLeftSwipe: PropTypes.func,
        onUpSwipe: PropTypes.func,
        onClickAway: PropTypes.func,
        image: PropTypes.object,
    }

    handleZoom = (compressedDimensions, originalDimensions) => {
        const compressedWidth = compressedDimensions.width
        const originalWidth = originalDimensions.width

        console.log(originalWidth / compressedWidth)
        const scaleFactor =
            originalWidth / compressedWidth > 2
                ? originalWidth / compressedWidth
                : 1
        this.setState({
            zoom: this.state.zoom === 1 ? scaleFactor : 1,
        })
    }

    render() {
        const {
            onRightSwipe,
            onLeftSwipe,
            onUpSwipe,
            onClickAway,
            image,
        } = this.props

        const {
            presentationWidth,
            presentationHeight,
            aspectRatio,
        } = image.childImageSharp.fluid

        let h = presentationHeight
        let w = presentationWidth

        try {
            if (h > window.innerHeight * 0.85) {
                h = window.innerHeight * 0.85
                w = h * aspectRatio
            }

            if (w > window.innerWidth * 0.95) {
                w = window.innerWidth * 0.95
                h = w / aspectRatio
            }
        } catch (e) {
            console.log(e)
        }

        const heightOffset = '80px'

        return (
            image && (
                <DragWrapper
                    onRightSwipe={onRightSwipe}
                    onLeftSwipe={onLeftSwipe}
                    onUpSwipe={onUpSwipe}
                    onClick={() =>
                        this.handleZoom(
                            { width: w, height: h },
                            {
                                width: presentationWidth,
                                height: presentationHeight,
                            }
                        )
                    }
                    zoom={this.state.zoom}
                >
                    <ClickAwayListener onClickAway={() => onClickAway()}>
                        <div>
                            <GatsbyImage
                                fluid={{
                                    ...image.childImageSharp.fluid,
                                    srcSet: '',
                                    srcSetWebp: '',
                                }}
                                style={{
                                    width: `${w}px`,
                                    height: `${h}px`,
                                }}
                                critical={true}
                            />
                            {image.description && this.state.zoom === 1 && (
                                <figcaption>
                                    <Description align={'center'} strip mt={3}>
                                        {image.description}
                                    </Description>
                                </figcaption>
                            )}
                        </div>
                    </ClickAwayListener>
                </DragWrapper>
            )
        )
    }
}
