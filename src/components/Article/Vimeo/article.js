import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '$theme/spacing'

const Wrapper = styled('div')`
    margin: 0 auto;
    position: relative;
    box-shadow: ${props => props.theme.shadow[6]};
    padding-top: ${({ dimensions }) =>
        (dimensions[1] / dimensions[0]) * 100 + '%'};
`

const Frame = styled('iframe')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
`

const OuterWrapper = styled('div')`
    margin: 0;
    margin-bottom: 40px;
    margin-top: -168px;
    ${media.tablet`
        margin: 0 auto;
        margin-top: 40px;
    `}
`

const Vimeo = ({ src, width, height }) => {
    width < 1056 ? (width = width) : (width = 1056)

    return (
        <OuterWrapper style={{ maxWidth: width + 'px' }}>
            <Wrapper dimensions={[width, height]}>
                <Frame
                    src={src}
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                />
            </Wrapper>
        </OuterWrapper>
    )
}

Vimeo.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Vimeo
