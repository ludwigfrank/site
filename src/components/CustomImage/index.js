import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { MyContext } from '../DataProvider'
import ContentWrapper from '$components/Layout/ContentWrapper'

const CustomImage = props => {
    return (
        <MyContext.Consumer>
            {context => {
                return (
                    <ContentWrapper>
                        <Img
                            style={{ maxHeight: '80vh' }}
                            fluid={context[props.imgSrc].childImageSharp.fluid}
                        />
                    </ContentWrapper>
                )
            }}
        </MyContext.Consumer>
    )
}

CustomImage.propTypes = {
    imgSrc: PropTypes.string,
}

export default CustomImage
