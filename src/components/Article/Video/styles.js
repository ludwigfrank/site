import styled from 'styled-components'

export const StyledVideo = styled('div')`
    display: flex;
    justify-content: center;
    > video {
        box-shadow: ${props => props.theme.shadow[7]};
    }
`
