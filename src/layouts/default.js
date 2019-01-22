import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import withTheme from '../theme'
import Navigation from '../components/Navigation'
import Footer from '$components/Footer'
import GlobalStyle from '../theme/GlobalStyle'

import '../assets/fonts/Recoleta/styles.css'
import '../assets/fonts/Theinhardt/styles.css'

export default withTheme(({ children }) => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Helmet
                title={'Ludwig Frank Portfolio'}
                meta={[
                    {
                        name: 'description',
                        content:
                            'The portfolio of Ludwig Frank, a User Experience Designer and Developer based in Berlin.',
                    },
                    {
                        name: 'keywords',
                        content: [
                            'ludwig',
                            'frank',
                            'design',
                            'protfolio',
                            'ux',
                            'ui',
                            'developer',
                        ],
                    },
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
