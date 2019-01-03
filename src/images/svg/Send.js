import React from 'react'
import { withTheme } from 'styled-components'

const Send = props => {
    const color = props.theme
        ? props.themeColor
            ? props.theme.color.text[props.themeColor]()
            : props.theme.color.text.accent()
        : '#003BE0'
    return (
        <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            style={{
                display: 'inline-block',
                transform: 'translateY(2.5px)',
                marginRight: '12px',
            }}
        >
            <path
                opacity="0.15"
                d="M13.13 17.5C13.05 17.5 12.93 17.48 12.82 17.39L1.6 8.66C1.41 8.51 1.42 8.29 1.43 8.21C1.44 8.13 1.5 7.92 1.73 7.82L17.82 0.54C17.87 0.51 17.94 0.5 18 0.5C18.15 0.5 18.3 0.58 18.4 0.71C18.45 0.78 18.54 0.94 18.48 1.15L13.61 17.14C13.54 17.39 13.32 17.5 13.13 17.5Z"
                fill={color}
            />
            <path
                d="M5 11.5L11.9474 6.53761C11.9816 6.51315 12.0226 6.5 12.0647 6.5C12.2366 6.5 12.3298 6.70109 12.2188 6.8323L7 13L5 11.5Z"
                fill={color}
                fill-opacity="0.54"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.61 0.0799999C17.74 0.0299999 17.87 0 18 0C18.63 0 19.15 0.61 18.96 1.28L14.09 17.28C13.96 17.73 13.55 18 13.13 18C12.91 18 12.69 17.92 12.5 17.77L9.35177 15.3211L7.24 17.67C7.04 17.9 6.77 18 6.51 18C6 18 5.5 17.61 5.5 17V12.3249L1.29 9.05C0.700003 8.57 0.830003 7.64 1.53 7.35L17.61 0.0799999ZM13.12 16.98L18 1L1.95 8.27L13.12 16.98Z"
                fill={color}
            />
        </svg>
    )
}

export default withTheme(Send)
