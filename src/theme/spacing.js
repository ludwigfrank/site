import { css } from 'styled-components'

export const space = [0, 4, 8, 16, 24, 32, 64, 128, 192, 256, 512]

export default {
    articleMaxWidth: '700px',
    contentMaxWidth: '1056px',
    contentPadding: '32px',
    columnMaxWidth: '88px',
    columnPadding: '16px',
}

export const sizes = {
    desktop: 1280,
    tablet: 860,
    phone: 576,
}

export const breakpoints = Object.values(sizes)
    .map(size => `${size}px`)
    .reverse()

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc
}, {})
