import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImagesMood on Query {
        current_mood: file(
            relativePath: { eq: "articles/mood/images/current-mood.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        current_mood_1: file(
            relativePath: { eq: "articles/mood/images/current-mood-1.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        current_mood_2: file(
            relativePath: { eq: "articles/mood/images/current-mood-2.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        current_mood_3: file(
            relativePath: { eq: "articles/mood/images/current-mood-3.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        current_mood_4: file(
            relativePath: { eq: "articles/mood/images/current-mood-4.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        home: file(relativePath: { eq: "articles/mood/images/home.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        gunther_one: file(
            relativePath: { eq: "articles/mood/images/gunther_one.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        gunther_two: file(
            relativePath: { eq: "articles/mood/images/gunther_two.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        persona_maria: file(
            relativePath: { eq: "articles/mood/images/persona_marie.jpeg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        user_flow: file(
            relativePath: { eq: "articles/mood/images/user_flow.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        doc: file(relativePath: { eq: "articles/mood/images/doc.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        user_testing: file(
            relativePath: { eq: "articles/mood/images/user_testing.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
