import React from 'react'
import { withTheme } from 'styled-components'

const Arrow = props => {
    const color = props.theme
        ? props.themeColor
            ? props.theme.color.text[props.themeColor]()
            : props.theme.color.text.primary()
        : '#131a21'
    return (
        <div style={{ transform: props.flip ? 'scaleX(-1)' : 'scaleX(1)' }}>
            <svg width="19" height="11" viewBox="0 0 19 11" fill="none">
                <path d="M18 5.5L0 5.5" stroke={color} />
                <path d="M13.5 1L18 5.5L13.5 10" stroke={color} />
            </svg>
        </div>
    )
}

export default withTheme(Arrow)
