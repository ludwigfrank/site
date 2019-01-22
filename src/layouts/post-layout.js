import React from 'react'
import DataProvider from '$components/DataProvider'
import { MDXProvider } from '@mdx-js/tag'
import { Paragraph, H2, H3, H4, Blockquote, Link } from '$components/Text'
import { ArticleMeta } from '$components/Article'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import GlobalStyle from '../theme/GlobalStyle'
import Layout from './default'
import { StaticQuery, graphql } from 'gatsby'
import ProjectFooter from '$components/ProjectFooter'
import Helmet from 'react-helmet'

export default ({ children, data, ...props }) => {
    const meta = props.pageContext.frontmatter
    return (
        <StaticQuery
            query={graphql`
                query Projects {
                    allMdx(
                        sort: { fields: [frontmatter___priority], order: ASC }
                    ) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    slug
                                    title
                                    coverImg {
                                        childImageSharp {
                                            fluid(maxWidth: 700, quality: 90) {
                                                presentationWidth
                                                presentationHeight
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
                        h2: props => (
                            <ArticleWrapper>
                                <H3> {props.children} </H3>
                            </ArticleWrapper>
                        ),
                        h3: props => (
                            <ArticleWrapper>
                                <H4> {props.children} </H4>
                            </ArticleWrapper>
                        ),
                        p: props => (
                            <ArticleWrapper>
                                <Paragraph> {props.children} </Paragraph>
                            </ArticleWrapper>
                        ),
                        blockquote: props => (
                            <ArticleWrapper>
                                <Blockquote>{props.children}</Blockquote>
                            </ArticleWrapper>
                        ),
                        img: props => {
                            console.log(props)
                            return <div> Image </div>
                        },
                        a: ({ href, children }) => {
                            const isInternal = !href.includes('.')
                            return (
                                <Link
                                    href={!isInternal && href}
                                    to={isInternal && href}
                                >
                                    {children}
                                </Link>
                            )
                        },
                    }}
                >
                    <Layout>
                        <Helmet title={`${meta.title} | Ludwig Frank`}>
                            <meta
                                property="og:url"
                                content={`http://ludwigfrank.com.com/${
                                    meta.slug
                                }`}
                            />
                            <meta
                                property="og:title"
                                content={`${meta.title} | Ludwig Frank`}
                            />
                        </Helmet>
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
