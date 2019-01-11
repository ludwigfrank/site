import styled, { keyframes } from 'styled-components'
import { space } from 'styled-system'
import { media } from '$theme/spacing'

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

export const Emojis = styled('div')`
    position: relative;
    display: inline-block;
    margin-left: 4px;
    overflow: visible;

    &:after {
        content: '';
        animation: ${emojiAnimation} 2s infinite linear;
    }
`

export const BottomTextWrapper = styled('footer')`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => props.theme.color.interface.seperator};
    ${media.phone`
        flex-direction: column;
        justify-content: center;
            align-items: center;
        > * {
            margin: 0px;
        }
    `}
    ${space};
`
