import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImagesPhotoeditor on Query {
        home: file(
            relativePath: { eq: "articles/photoeditor/images/home.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        filter: file(
            relativePath: { eq: "articles/photoeditor/images/filter.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        focus: file(
            relativePath: { eq: "articles/photoeditor/images/focus.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        brush_dragging: file(
            relativePath: {
                eq: "articles/photoeditor/images/brush_dragging.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        overlay: file(
            relativePath: { eq: "articles/photoeditor/images/overlay.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        sticker_color: file(
            relativePath: {
                eq: "articles/photoeditor/images/sticker_color.png"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        text_font: file(
            relativePath: { eq: "articles/photoeditor/images/text_font.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        transform: file(
            relativePath: { eq: "articles/photoeditor/images/transform.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
