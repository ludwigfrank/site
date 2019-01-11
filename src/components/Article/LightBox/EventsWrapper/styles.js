import styled from 'styled-components'

export const Wrapper = styled('div')`
    align-items: center;
    display: flex;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 400;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.9);
    transition: ${props => props.theme.animation.create()};
`
