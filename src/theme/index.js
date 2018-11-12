import mapValues from 'lodash/mapValues'
import color from './color'
import React from 'react'
import typography from './typography'
import animation from './animation'
import spacing from './spacing'
import shadow from './shadow'
import { THEME_ACTIVE, THEME_DARK } from './constants'
import { ThemeProvider } from 'styled-components'

export const extractActiveThemeColor = (themeColorObject, activeTheme) => {
    if (typeof themeColorObject !== 'object') throw new Error('Theme should only consist of objects!')
    const style = {}
    mapValues(themeColorObject, (category, categoryName) => {
        style[categoryName] = {}
        mapValues(category, (color, colorName) => {
            const c =  themeColorObject[categoryName][colorName][activeTheme]
            style[categoryName][colorName] = () => {
                if (typeof c === 'string') return c
                // Todo: Transform all colors to hsl
                if (Array.isArray(c)) return c.map((val, index) => index !== 0 ? (index === 1 ? val + '%,' : val + '%' ) : val + ',')
            }
        })
    })

    return style
}

const col = extractActiveThemeColor(color, THEME_ACTIVE )
col.category = {
    dark: extractActiveThemeColor(color, THEME_DARK)
}

const getTheme = (themeId = THEME_ACTIVE) => {
    return {
        color: extractActiveThemeColor(color, themeId),
        typography,
        shadow,
        spacing,
        animation,
        space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
        breakpoints: ['480px', '840px', spacing.contentMaxWidth]
    }
}

export const themeActive = THEME_ACTIVE

const withTheme = (Component, themeId = THEME_ACTIVE) => props => (
    <ThemeProvider theme={getTheme(themeId)}>
        <Component {...props} />
    </ThemeProvider>
)

export default withTheme