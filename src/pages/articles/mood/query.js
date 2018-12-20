import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImagesMood on Query {
        beach: file(
            relativePath: { eq: "articles/active-archives/images/beach.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        boat: file(
            relativePath: { eq: "articles/active-archives/images/boat.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
