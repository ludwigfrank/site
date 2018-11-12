import React from 'react'
import styled from 'styled-components'

const Styles = styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.spacing.contentMaxWidth};
    padding: 0 ${props => props.theme.spacing.contentPadding};
`

const ContentWrapper = ({ children }) => <Styles> {children} </Styles>

export default ContentWrapper
