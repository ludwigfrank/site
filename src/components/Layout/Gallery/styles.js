import styled, { css } from 'styled-components'

const padding = 6

export const Wrapper = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    width: calc(100% + 12px);
    margin: 0px -6px;
    box-sizing: border-box;
    background: 'red';
    min-height: 40px;
`

export const InnerWrapper = styled('div')`
    flex: ${props => props.flexGrow} 1 0;
    padding: 6px;
`
