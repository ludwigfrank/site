import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import withTheme from '../theme'
import Navigation from '../components/Navigation'

const ContentWrapper = styled('div')`
    margin-top: 64px;
`

export default withTheme(({ children }) => {
    return (
        <Fragment>
            <Helmet
                title={'Ludwig Frank Portfolio'}
                meta={[
                    { name: 'description', content: 'Ludwig Frank Portfolio' },
                    { name: 'keywords', content: ['keywords'] },
                ]}
            >
                <html lang="en" />
            </Helmet>
            <Navigation />
            {children}
        </Fragment>
    )
})

export const pageQuery = graphql`
    fragment site on Site {
        siteMetadata {
            title
            description
            author
            keywords
        }
    }
`
