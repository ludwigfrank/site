import React from 'react'
import styled from 'styled-components'

const Styles = styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.spacing.articleMaxWidth};
    padding: 0 ${props => props.theme.spacing.contentPadding};
`

const ArticleWrapper = ({ children }) => <Styles> {children} </Styles>

export default ArticleWrapper
