import styled, { css } from 'styled-components'

export const Wrapper = styled('div')`
    width: auto;
    position: relative;
    height: auto;
    margin: 0 auto;
    ${props =>
        props.shadow &&
        css`
            box-shadow: ${props.theme.shadow[7]};
        `}
    ${props =>
        props.borderRadius &&
        css`
            border-radius: 4px;
            overflow: hidden;
        `}
`
