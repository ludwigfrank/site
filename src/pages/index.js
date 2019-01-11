import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'
import Projects from '../components/Projects'
import Intro from '$components/Intro'
import { Description, Link } from '$components/Text'

export default function Index({ data: { site, allMdx } }) {
    return (
        <Layout site={site}>
            <Intro />
            <Projects projects={allMdx.edges} />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Description mb={[4, 6, 6]} mt={[20, 20, 34]}>
                    Self-made with love.{' '}
                    <Link href={'https://github.com/ludwigfrank/site'}>
                        {' '}
                        Code here
                    </Link>
                    .
                </Description>
            </div>
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
