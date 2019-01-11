import React from 'react'
import styled from 'styled-components'

import Close from '../../../../../images/svg/Close'

export const Wrapper = styled('div')`
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 3px 5px -1px rgba(27, 39, 51, 0.12),
        0px 6px 10px 0px rgba(27, 39, 51, 0.12),
        0px 1px 18px 0px rgba(27, 39, 51, 0.16);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
    margin-top: 17px;
    cursor: pointer;
    transform: ${props => (props.flip ? 'scaleX(-1)' : 'scaleX(1)')};
    transition: ${props => props.theme.animation.create()};
    > * {
        transition: ${props => props.theme.animation.create()};
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        > * {
            opacity: 0.3;
        }
    }
`

export const StyledClose = styled(Close)``
