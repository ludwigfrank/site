import React from 'react'
import { typeLink } from './propTypes'

DefaultLink.propTypes = {
    link: typeLink,
}

const Link = ({ link }) => (
    <line
        x1={link.source.x}
        y1={link.source.y}
        x2={link.target.x}
        y2={link.target.y}
        strokeWidth={2}
        stroke="#999"
        strokeOpacity={0.6}
    />
)

export default Link
