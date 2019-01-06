import styled, { keyframes } from 'styled-components'
import { space } from 'styled-system'

const emojiAnimation = keyframes`
    from {
        content: '❤️';
    }
    20% {
        content: '🍺️';
    }
    40% {
        content: '🤷‍♂️️';
    }
    60% {
        content: '🎧️️';
    }
    80% {
        content: '😁️';
    }
    100% {
        content: '❤️';
    }
`

export const Emojis = styled('span')`
    position: relative;
    display: inline-block;
    margin-left: 4px;

    &:before {
        content: '';
        animation: ${emojiAnimation} 2s infinite linear;
    }
`

export const BottomTextWrapper = styled('footer')`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border-top: 1px solid ${props => props.theme.color.interface.seperator};
    ${space}
`
