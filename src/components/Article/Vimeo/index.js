import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContentWrapper from '$components/Layout/ContentWrapper'

const Wrapper = styled('div')`
    margin: 0 auto;
    max-width: 1056px;
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

const Vimeo = ({ src, width, height }) => {
    return (
        <ContentWrapper stripMobile>
            <Wrapper dimensions={[width, height]}>
                <Frame
                    src={src}
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                />
            </Wrapper>
        </ContentWrapper>
    )
}

Vimeo.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Vimeo
