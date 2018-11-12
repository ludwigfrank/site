import React from 'react'
import DataProvider from '$components/DataProvider'
import { MDXProvider } from '@mdx-js/tag'
import { Paragraph, H2 } from '$components/Text'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import Layout from './default'
import { graphql } from 'gatsby'

export default ({ children, data, ...props }) => {
    console.log('Props ', props, 'Data ', data)
    const meta = require(`../pages${props.location.pathname}`).meta
    console.log(meta)
    return (
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
                    <div>{children}</div>
                    <pre>{JSON.stringify(props, null, 2)}</pre>
                </DataProvider>
            </Layout>
        </MDXProvider>
    )
}
