import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImagesAutonomousTravel on Query {
        beach: file(
            relativePath: { eq: "articles/autonomous-travel/images/beach.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        money: file(
            relativePath: { eq: "articles/autonomous-travel/images/money.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        attendants: file(
            relativePath: {
                eq: "articles/autonomous-travel/images/attendants.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        attendants2: file(
            relativePath: {
                eq: "articles/autonomous-travel/images/attendants-2.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        attendants3: file(
            relativePath: {
                eq: "articles/autonomous-travel/images/attendants-3.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        route: file(
            relativePath: { eq: "articles/autonomous-travel/images/route.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        route2: file(
            relativePath: {
                eq: "articles/autonomous-travel/images/route-2.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        route3: file(
            relativePath: {
                eq: "articles/autonomous-travel/images/route-3.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        route4: file(
            relativePath: {
                eq: "articles/autonomous-travel/images/route-4.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        route5: file(
            relativePath: {
                eq: "articles/autonomous-travel/images/route-5.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
