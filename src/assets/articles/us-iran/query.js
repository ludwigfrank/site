import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImagesUsIran on Query {
        initial_sketches_1: file(
            relativePath: {
                eq: "articles/us-iran/images/initial_sketches_1.jpeg"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        initial_sketches_2: file(
            relativePath: {
                eq: "articles/us-iran/images/initial_sketches_2.jpeg"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        initial_sketches_3: file(
            relativePath: {
                eq: "articles/us-iran/images/initial_sketches_3.jpeg"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        main_view: file(
            relativePath: { eq: "articles/us-iran/images/main_view.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        detail_view__timeline_sentiment_compare: file(
            relativePath: {
                eq: "articles/us-iran/images/detail_view__timeline_sentiment_compare.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        main_view__entity_hover: file(
            relativePath: {
                eq: "articles/us-iran/images/main_view__entity_hover.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        detail_view__timeline_hover: file(
            relativePath: {
                eq: "articles/us-iran/images/detail_view__timeline_hover.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        detail_view__timeline_sentiment: file(
            relativePath: {
                eq: "articles/us-iran/images/detail_view__timeline_sentiment.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
    }
`
