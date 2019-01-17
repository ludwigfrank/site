import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImagesUsIran on Query {
        detail_view__hover_document: file(
            relativePath: {
                eq: "articles/us-iran/images/detail_view__hover_document.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }

        detail_view__hover_participant: file(
            relativePath: {
                eq: "articles/us-iran/images/detail_view__hover_participant.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }

        detail_view__tags_out: file(
            relativePath: {
                eq: "articles/us-iran/images/detail_view__tags_out.png"
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

        detail_view_default: file(
            relativePath: {
                eq: "articles/us-iran/images/detail_view_default.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }

        final_presentation: file(
            relativePath: {
                eq: "articles/us-iran/images/final_presentation.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }

        icons_evolution: file(
            relativePath: { eq: "articles/us-iran/images/icons_evolution.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }

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

        main_view__entity_hover_timespan: file(
            relativePath: {
                eq: "articles/us-iran/images/main_view__entity_hover_timespan.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }

        search_view: file(
            relativePath: { eq: "articles/us-iran/images/search_view.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }

        timeline_sketch: file(
            relativePath: { eq: "articles/us-iran/images/timeline_sketch.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                    ...DefaultImage
                }
            }
        }

        use_case__01_01: file(
            relativePath: { eq: "articles/us-iran/images/use_case__01_01.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                    ...DefaultImage
                }
            }
        }

        use_case__01_02: file(
            relativePath: { eq: "articles/us-iran/images/use_case__01_02.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                    ...DefaultImage
                }
            }
        }

        use_case__01_03: file(
            relativePath: { eq: "articles/us-iran/images/use_case__01_03.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                    ...DefaultImage
                }
            }
        }
    }
`
