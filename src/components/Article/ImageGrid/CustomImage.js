import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled('div')`
    border-radius: 4px;
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
