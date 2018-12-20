import { css } from 'styled-components'

export default {
    articleMaxWidth: '700px',
    contentMaxWidth: '1056px',
    contentPadding: '32px',
    columnMaxWidth: '88px',
    columnPadding: '16px',
}

const sizes = {
    desktop: 1280,
    tablet: 768,
    phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc
}, {})
