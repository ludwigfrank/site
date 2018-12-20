import React from 'react'
import styled, { css } from 'styled-components'
import {
    space,
    flex,
    alignSelf,
    alignItems,
    flexWrap,
    flexDirection,
    justifyContent,
} from 'styled-system'

const Styles = styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.spacing.contentMaxWidth};
    padding: 0 ${props => props.theme.spacing.contentPadding};
    display: ${props => (props.flex ? 'flex' : 'inherit')};
    ${(flex,
    space,
    flexDirection,
    justifyContent,
    flexWrap,
    alignItems)}
    ${space};
`

const ContentWrapper = ({ children, ...props }) => (
    <Styles {...props}> {children} </Styles>
)

export default ContentWrapper
