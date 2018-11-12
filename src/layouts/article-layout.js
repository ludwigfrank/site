import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from './default'
import { Paragraph } from '$components/Text'

export const ImageContext = React.createContext()
export default function ArticleLayout({
    data: { site, mdx, ...rest },
    pageContext: { imageData },
}) {
    const meta = mdx.exports.meta
    return (
        <MDXProvider
            components={{
                p: props => <Paragraph>{'Hello'}</Paragraph>,
            }}
        >
            <Layout site={site} frontmatter={meta}>
                <h1>{meta.title}</h1>
                <h2>{meta.date}</h2>
                <ImageContext.Provider value={imageData}>
                    <MDXRenderer>{mdx.code.body}</MDXRenderer>
                </ImageContext.Provider>
            </Layout>
        </MDXProvider>
    )
}

export const pageQuery = graphql`
    query($id: String!) {
        site {
            ...site
        }
        mdx(fields: { id: { eq: $id } }) {
            exports {
                meta {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    categories
                    keywords
                    description
                    team {
                        name
                        responsibility
                    }
                }
            }
            code {
                body
            }
        }
    }
`
