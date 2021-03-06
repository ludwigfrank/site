import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { generateIdFromString } from '$utils'

const Wrapper = styled('div')`
    border-radius: 2px;
    box-shadow: ${props => props.theme.shadow[2]};
`

const cont = {
    backgroundColor: '#eee',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
}

const CustomImage = ({
    index,
    onClick,
    photo,
    margin,
    direction,
    top,
    left,
}) => {
    if (direction === 'column') {
        cont.position = 'absolute'
        cont.left = left
        cont.top = top
    }

    console.log(generateIdFromString(photo.childImageSharp.fluid.originalImg))
    return (
        <Wrapper
            style={{
                margin,
                height: Math.floor(photo.height),
                width: Math.floor(photo.width),
                ...cont,
            }}
            onClick={() => photo.handleClick(index)}
        >
            <Image fluid={photo.childImageSharp.fluid} />
        </Wrapper>
    )
}

export default CustomImage
