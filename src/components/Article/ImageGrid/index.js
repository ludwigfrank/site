import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'

import { MyContext } from '../../DataProvider'
import CustomImage from './CustomImage'
import ContentWrapper from '$components/Layout/ContentWrapper'
import LightBox from '$components/Article/LightBox'
import Hint from './Hint'

export default class ImageGrid extends Component {
    state = {
        margin: 4,
        lightBoxOpen: false,
        currentImageIndex: 0,
    }

    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                description: PropTypes.string,
            })
        ),
        numColumns: PropTypes.number,
    }

    static defaultProps = {
        numColumns: 4,
        hint: false,
    }

    parseContextDataForGallery = contextData => {
        const { images } = this.props
        const saturatedImages = images.map((image, index) => {
            const sharpImageData = contextData[image.src]
            const aspectRatio = sharpImageData.childImageSharp.fluid.aspectRatio
            const base = 4
            const width = Math.round(base * aspectRatio * 100) / 100
            const height = base

            return {
                ...image,
                ...sharpImageData,
                width,
                height,
                handleClick: this.handleLightboxOpen,
            }
        })
        return saturatedImages
    }

    calculateColumnNum = containerWidth => {
        if (containerWidth < 600) {
            if (this.state.margin !== 1)
                this.setState({
                    margin: 1,
                })
            return this.props.numColumns - 1
        }
        if (this.state.margin !== 4) this.setState({ margin: 4 })
        return this.props.numColumns
    }

    handleLightboxNextClick = images => {
        const { currentImageIndex } = this.state
        let nextIndex = currentImageIndex + 1
        if (currentImageIndex === images.length - 1) nextIndex = 0

        this.setState({
            currentImageIndex: nextIndex,
        })
    }

    handleLightboxPrevClick = images => {
        const { currentImageIndex } = this.state
        let nextIndex = currentImageIndex - 1
        if (currentImageIndex === 0) nextIndex = images.length - 1

        this.setState({
            currentImageIndex: nextIndex,
        })
    }

    handleLightboxOpen = index => {
        this.setState({
            lightBoxOpen: true,
            currentImageIndex: index,
        })
    }

    handleLightboxClose = () => {
        this.setState({
            lightBoxOpen: false,
        })
    }

    render() {
        return (
            <ContentWrapper
                stripMobile
                my={[5, 6, 6]}
                flex
                justifyContent={'center'}
                flexDirection={'column'}
            >
                {this.props.hint && <Hint>Tap images to enlarge.</Hint>}
                <MyContext.Consumer>
                    {context => {
                        const images = this.parseContextDataForGallery(context)

                        return [
                            <Gallery
                                key="gallery"
                                ImageComponent={CustomImage}
                                photos={images}
                                columns={this.calculateColumnNum}
                                margin={this.state.margin}
                            />,

                            <LightBox
                                key="lightbox"
                                currentImage={
                                    images[this.state.currentImageIndex]
                                }
                                onNextClick={() =>
                                    this.handleLightboxNextClick(images)
                                }
                                onPrevClick={() =>
                                    this.handleLightboxPrevClick(images)
                                }
                                onClose={() => this.handleLightboxClose()}
                                isOpen={this.state.lightBoxOpen}
                            />,
                        ]
                    }}
                </MyContext.Consumer>
            </ContentWrapper>
        )
    }
}
