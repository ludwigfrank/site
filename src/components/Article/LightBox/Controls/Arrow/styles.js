import React from 'react'
import styled from 'styled-components'

import Arrow from '../../../../../images/svg/Arrow'

export const Wrapper = styled('div')`
    background-color: #fff;
    box-shadow: 0px 3px 5px -1px rgba(27, 39, 51, 0.12),
        0px 6px 10px 0px rgba(27, 39, 51, 0.12),
        0px 1px 18px 0px rgba(27, 39, 51, 0.16);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
    cursor: pointer;
    transition: ${props => props.theme.animation.create()};
    > * {
        transition: ${props => props.theme.animation.create()};
    }

    &:hover {
        background-color: #f3f3f3;
        > * {
            opacity: 0.3;
        }
    }
`

export const StyledArrow = styled(Arrow)`
    transform: ${props => (props.flip ? 'scaleX(-1)' : 'scaleX(1)')};
`
