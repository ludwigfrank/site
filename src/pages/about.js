import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'
import { Paragraph, H2, Link } from '$components/Text'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import ContentWrapper from '$components/Layout/ContentWrapper'
import Image from 'gatsby-image'

import experience from '../lib/content/experience'
import Experience from '$components/Experience'

export default function About({ data: { site, me } }) {
    return (
        <Layout site={site}>
            <ArticleWrapper mt={7} mb={6}>
                <H2> Hey, I'm Ludwig! </H2>
                <Paragraph>
                    I love being part of a team with the aim to tackle the
                    complex problems, people and businesses around the world
                    face each day. To learn from each other in the process,
                    thrive from diversity and build products that matter.
                    Products in any shape or form that delight people and help
                    them{' '}
                    <Link to="articles/autonomous-travel">
                        become a better version of themselves
                    </Link>
                    .
                </Paragraph>
                <Paragraph mb={6}>
                    Currently, I am studying Human Computer Interaction at the{' '}
                    <Link href="https://www.fh-potsdam.de/interfacedesign/">
                        {' '}
                        University of Applied Sciences, Potsdam
                    </Link>{' '}
                    and work on the future of Photo Editing as one of two
                    Designers at{' '}
                    <Link href="https://www.blog.photoeditorsdk.com">
                        PhotoEditorSDK & img.ly
                    </Link>
                    . Throughout my career, I have had the privilege of working
                    with Amazon, HP, Massachusetts Institute of Technology,
                    Deutsche Telekom, VW and many more.
                </Paragraph>
            </ArticleWrapper>
            <Image
                fluid={me.childImageSharp.fluid}
                style={{
                    maxHeight: '450px',
                    maxWidth: '700px',
                    margin: '0 auto',
                }}
            />
            <ArticleWrapper>
                <H2 mt={[5, 5, 7]} mb={[4, 4, 6]}>
                    Experience
                </H2>
            </ArticleWrapper>
            <ContentWrapper>
                <Experience experience={experience} />
            </ContentWrapper>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        site {
            ...site
        }
        me: file(relativePath: { eq: "myself.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
