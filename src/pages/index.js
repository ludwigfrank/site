import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'
import Projects from '../components/Projects'

export default function Index({ data: { site, allMdx } }) {
    const projects = allMdx.edges
    console.log(projects)
    return (
        <Layout site={site}>
            <Projects projects={allMdx.edges} />
            Landing Page
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
                    exports {
                        meta {
                            slug
                            title
                            date
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
    }
`
