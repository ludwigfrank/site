import React from 'react'
import PropTypes from 'prop-types'
import { Footnote } from '$components/Text'
import styled from 'styled-components'
import Send from '../../images/svg/Send'

const ButtonWrapper = styled('button')`
    align-items: center;
    transition: ${props => props.theme.animation.create()};
    line-height: normal;
    padding: 8px 16px;
    text-align: center;
    min-height: 34px;
    box-sizing: border-box;
    border-radius: 4px;
    background: ${props => props.theme.color.text.accent}20;
    color: ${props => props.theme.color.text.accent};
    cursor: pointer;
    width: 100%;
    border: none;
    :focus {
        outline: 0;
    }
    :hover {
        background: ${props => props.theme.color.text.accent}45;
    }
`

const Button = ({ onClick, type, children }) => {
    return (
        <ButtonWrapper type={type} onClick={onClick}>
            <Send themeColor={'accent'} />
            <Footnote
                strip
                themeColor={'accent'}
                mt={'4px'}
                style={{ display: 'inline-block' }}
            >
                {children}
            </Footnote>
        </ButtonWrapper>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default Button
