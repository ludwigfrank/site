import styled, { keyframes } from 'styled-components'

export const Wrapper = styled('div')`
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    padding: 8px 16px 4px;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    margin-bottom: 16px;
`

export const IllustrationWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const IllustrationBorder = styled('div')`
    position: absolute;
    width: 16px;
    height: 14px;
    background: ${props => props.theme.color.text.primary}55;
    border-radius: 2px;
`

export const IllustrationClick = styled('div')`
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${props => props.theme.color.text.accent};
    border-radius: 50%;
    z-index: 2;
`
