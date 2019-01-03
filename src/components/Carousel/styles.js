import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

export const Container = styled('div')`
    display: block;
    position: relative;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    white-space: nowrap;
    ${space}
`

export const ArmWrapper = styled('div')`
    position: absolute;
    z-index: 10;
    bottom: -40px;
    opacity: ${props => (props.didDrag ? 0 : 1)};
    transition: ${props => props.theme.animation.create()};
`
