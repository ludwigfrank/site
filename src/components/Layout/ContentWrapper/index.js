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
import { Flex } from '@rebass/grid'

const Styles = styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.spacing.contentMaxWidth};
    display: ${props => (props.flex ? 'flex' : 'inherit')};
    ${(flex, space, flexDirection, justifyContent, flexWrap, alignItems)}
    ${space};
    ${flexDirection};
`

const ContentWrapper = ({ children, theme, stripMobile, ...props }) => (
    <Styles
        {...props}
        px={[
            stripMobile ? 0 : 3,
            stripMobile ? 0 : 4,
            theme.spacing.contentPadding,
        ]}
    >
        {children}
    </Styles>
)

export default withTheme(ContentWrapper)
