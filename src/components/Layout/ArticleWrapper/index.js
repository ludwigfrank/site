import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
    space,
    flex,
    alignItems,
    flexWrap,
    flexDirection,
    justifyContent,
} from 'styled-system'

const Styles = styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.spacing.articleMaxWidth};
    display: ${props => (props.flex ? 'flex' : 'inherit')};
    ${(flex, space, flexDirection, justifyContent, flexWrap, alignItems)}
    ${space};
`

const ArticleWrapper = ({ children, ...props }) => (
    <Styles {...props} px={[3, 4, 5]}>
        {children}
    </Styles>
)

export default withTheme(ArticleWrapper)
