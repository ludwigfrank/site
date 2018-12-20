import React from 'react'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import { Callout } from '$components/Text'

const Intro = () => {
    return (
        <ArticleWrapper mt={7} mb={200}>
            <Callout>
                Ludwig Frank is a User Experience Designer and Developer who
                loves to stay curious, to observe and to solve problems humans
                around the world face each day.
            </Callout>
        </ArticleWrapper>
    )
}

export default Intro
