import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withTheme from '../theme'
import Navigation from '../components/Navigation'
import Footer from '$components/Footer'
import GlobalStyle from '../theme/GlobalStyle'

import '../assets/fonts/Theinhardt/styles.css'

export default withTheme(({ children }) => {
    return (
        <div style={{ overflowX: 'hidden' }}>
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
            <GlobalStyle />
            <div style={{ paddingTop: '64px' }}>{children}</div>
            <Footer />
        </div>
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
