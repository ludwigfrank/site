import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withTheme from '../theme'
import Navigation from '../components/Navigation'
import Footer from '$components/Footer'

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
            <Footer />
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
