import React from 'react'
import PropTypes from 'prop-types'
import ContentWrapper from '$components/Layout/ContentWrapper'
import CustomImage from '$components/CustomImage'

import { Wrapper, ImageWrapper } from './styles'

const Grid = ({ images }) => {
    return (
        <ContentWrapper stripMobile>
            <Wrapper>
                {images.map(image => {
                    return (
                        <ImageWrapper>
                            <CustomImage
                                imgSrc={image.src}
                                description={image.description}
                            />
                        </ImageWrapper>
                    )
                })}
            </Wrapper>
        </ContentWrapper>
    )
}

Grid.propTypes = {
    images: PropTypes.arrayOf({
        src: PropTypes.string.isRequired,
    }),
}

export default Grid
