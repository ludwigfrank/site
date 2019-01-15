import React from 'react'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import { Callout, Paragraph, Link } from '$components/Text'

const Intro = () => {
    return (
        <ArticleWrapper mt={[7, 7, 8]} mb={140}>
            <Callout>
                I'm Ludwig Frank, a User Experience Designer and Developer who
                loves to stay curious, to observe and find solutions to the
                problems humans around the world face each day.
            </Callout>
            <Paragraph>
                You can find me on{' '}
                <Link href="https://www.instagram.com/luddi.jpg/">
                    Instagram
                </Link>{' '}
                or read <Link to="/about">my story</Link>.
            </Paragraph>
        </ArticleWrapper>
    )
}

export default Intro
