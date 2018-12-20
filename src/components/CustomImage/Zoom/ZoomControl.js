import React from 'react'
import IconSearch from '../../../images/icons/Search.js'
import styled from 'styled-components'

const Wrapper = styled('div').attrs(({ show }) => ({
    style: {
        padding: show ? `8px 8px 24px 24px` : `8px 8px 16px 16px`,
        opacity: show ? 1 : 0,
    },
}))`
    transition: ${props => props.theme.animation.create()};
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
    height: 24px;
    width: 24px;
    border-radius: 0 0 0 100%;
    z-index: 1000;
    cursor: pointer;
`

const StyledIconSearch = styled(IconSearch).attrs(({ show }) => ({
    style: {
        opacity: show ? 1 : 0,
    },
}))`
    transition-delay: 4s;
    transition: opacity
        ${props => (props.show === true ? `0.4s ease-out` : `0.15s ease-in`)};
`

const ZoomControl = ({ show, handleClick }) => {
    return (
        <Wrapper show={show} onClick={handleClick}>
            <StyledIconSearch width={24} height={24} show={show} />
        </Wrapper>
    )
}

export default ZoomControl
