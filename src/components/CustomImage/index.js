import React from 'react'
import PropTypes from 'prop-types'
import { MyContext } from '../DataProvider'
import { Wrapper } from './styles'
import { getElementDimensions } from './utils'
import ZoomImage from './Zoom'

const CustomImage = props => {
    return (
        <Wrapper {...props}>
            <MyContext.Consumer>
                {context => {
                    const dimensions = getElementDimensions(props, context)
                    const { isZoomed } = props
                    if (isZoomed) {
                        props = { ...props, isZoomed: false }
                    }

                    return (
                        <ZoomImage
                            {...props}
                            imageStyles={{
                                margin: '0 auto',
                                width: dimensions.width,
                                height: dimensions.height,
                            }}
                            image={context[props.imgSrc].childImageSharp.fluid}
                        />
                    )
                }}
            </MyContext.Consumer>
        </Wrapper>
    )
}

CustomImage.propTypes = {
    imgSrc: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

CustomImage.defaultProps = {
    displayName: 'Image',
}

export default CustomImage
