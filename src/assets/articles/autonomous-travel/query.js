import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImagesAutonomousTravel on Query {
        beach: file(
            relativePath: { eq: "articles/autonomous-travel/images/beach.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        money: file(
            relativePath: { eq: "articles/autonomous-travel/images/money.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...DefaultImage
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
                    ...DefaultImage
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
                    ...DefaultImage
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
                    ...DefaultImage
                }
            }
        }
        route: file(
            relativePath: { eq: "articles/autonomous-travel/images/route.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...DefaultImage
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
                    ...DefaultImage
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
                    ...DefaultImage
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
                    ...DefaultImage
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
                    ...DefaultImage
                }
            }
        }
    }
`
