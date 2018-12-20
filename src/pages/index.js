import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'
import Projects from '../components/Projects'
import GlobalStyle from '../theme/GlobalStyle'
import Intro from '$components/Intro'
import Hand from '$components/Illustrations/Hand'

export default function Index({ data: { site, allMdx } }) {
    const projects = allMdx.edges
    return (
        <Layout site={site}>
            <GlobalStyle />
            <Intro />
            <Projects projects={allMdx.edges} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        site {
            ...site
        }
        allMdx {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        title
                        coverImg {
                            childImageSharp {
                                fluid(maxWidth: 700, quality: 90) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        time
                        description
                        team {
                            name
                            responsibility
                        }
                    }
                }
            }
        }
    }
`
