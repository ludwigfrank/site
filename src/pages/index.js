import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'
import Projects from '../components/Projects'
import Intro from '$components/Intro'

export default function Index({ data: { site, allMdx } }) {
    return (
        <Layout site={site}>
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
        allMdx(sort: { fields: [frontmatter___priority], order: ASC }) {
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
                        priority
                    }
                }
            }
        }
    }
`
