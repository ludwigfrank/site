import React from 'react'
import DataProvider from '$components/DataProvider'
import { MDXProvider } from '@mdx-js/tag'
import { Paragraph, H2 } from '$components/Text'
import { ArticleMeta } from '$components/Article'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import GlobalStyle from '../theme/GlobalStyle'
import Layout from './default'
import { StaticQuery, graphql } from 'gatsby'
import ProjectFooter from '$components/ProjectFooter'

export default ({ children, data, ...props }) => {
    const meta = props.pageContext.frontmatter
    console.log(data)
    return (
        <StaticQuery
            query={graphql`
                query Projects {
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
                                    description
                                }
                            }
                        }
                    }
                }
            `}
            render={({ allMdx }) => (
                <MDXProvider
                    components={{
                        h1: props => (
                            <ArticleWrapper>
                                <H2> {props.children} </H2>
                            </ArticleWrapper>
                        ),
                        p: props => (
                            <ArticleWrapper>
                                <Paragraph> {props.children} </Paragraph>
                            </ArticleWrapper>
                        ),
                    }}
                >
                    <Layout>
                        <DataProvider value={data}>
                            <ArticleMeta meta={meta} />
                            <div>{children}</div>
                        </DataProvider>
                        <ProjectFooter
                            projects={allMdx.edges}
                            activeProjectSlug={meta.slug}
                        />
                        <GlobalStyle />
                    </Layout>
                </MDXProvider>
            )}
        />
    )
}
