import styled from 'styled-components'

export const StyledVideo = styled('div')`
    display: flex;
    justify-content: center;
    max-width: 1056px;
    > video {
        box-shadow: ${props => props.theme.shadow[7]};
    }
`
