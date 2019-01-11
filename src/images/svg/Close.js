import React from 'react'
import { withTheme } from 'styled-components'

const Arrow = props => {
    const color = props.theme
        ? props.themeColor
            ? props.theme.color.text[props.themeColor]()
            : '#fff'
        : '#131a21'
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.5107 17.5104L6.48993 5.48959" stroke={color} />
            <path d="M6.48993 17.5104L18.5107 5.48959" stroke={color} />
        </svg>
    )
}

export default withTheme(Arrow)
