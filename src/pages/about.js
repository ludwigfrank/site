import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'
import { Paragraph, H2, Callout, Link } from '$components/Text'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import ContentWrapper from '$components/Layout/ContentWrapper'

import Carousel from '$components/Carousel'
import styled from 'styled-components'

const TestItem = styled('div')`
    width: 420px;
    height: 100%;
    background-color: blue;
`

export default function About({ data: { site } }) {
    return (
        <Layout site={site}>
            <ContentWrapper mt={7}>
                <Carousel>
                    <TestItem />
                    <TestItem />
                    <TestItem />
                    <TestItem />
                </Carousel>
            </ContentWrapper>

            <ArticleWrapper mt={4}>
                <Callout> Hey, I'm Ludwig! </Callout>
                <Paragraph>
                    I love being part of a team with the aim to tackle the
                    complex problems, people and businesses around the world
                    face each day. To learn from each other in the process,
                    thrive from diversity and build products that matter.
                    Products in any shape or form that delight people and help
                    them <Link>become a better version of themselves</Link>.
                </Paragraph>
                <Paragraph>
                    Currently, I am studying Interface Design at the University
                    of Applied Sciences, Potsdam and work on the future of Photo
                    Editing as one of two Designers at img.ly. Throughout my
                    career, I have had the privilege of working with Amazon, HP,
                    Massachusetts Institute of Technology, Deutsche Telekom, VW
                    and many more.
                </Paragraph>
            </ArticleWrapper>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        site {
            ...site
        }
    }
`
