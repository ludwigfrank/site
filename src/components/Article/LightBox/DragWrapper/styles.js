import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled('div')`
    align-items: center;
    display: flex;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 400;
    user-select: none;
    transition: ${props => props.theme.animation.create()};
`
