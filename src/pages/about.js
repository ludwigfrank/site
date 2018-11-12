import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'

export default function About({ data: { site } }) {
    return <Layout site={site}>About me</Layout>
}

export const pageQuery = graphql`
    query {
        site {
            ...site
        }
    }
`
