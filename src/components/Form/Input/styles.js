import React from 'react'
import styled, { css } from 'styled-components'
import baseStyles from '$components/Text/defaultStyles'
import { space } from 'styled-system'

export const inputBaseStyle = css`
    ${baseStyles};
    display: inline-block;
    border: none;
    outline: none;
    width: 100%;
    background: #ececec;
    box-sizing: border-box;
    line-height: 32px;
    font-size: 22px;
    color: ${props => props.theme.color.text.primary};
    ${space};
    ::placeholder {
        opacity: 0.5;
    }
`

export const InputWrapper = styled('input')`
    ${inputBaseStyle};
`
