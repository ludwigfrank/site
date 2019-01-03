import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { H3, Caption } from '$components/Text'
import Link from 'gatsby-link'

const Item = styled(Link)`
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
    position: relative;
    display: inline-block;
    bottom: 0;
`

const TextContent = styled('div')``

const ProjectBackground = styled(Image)`
    width: 100%;
    height: 400px;
    background-color: rgb(253, 151, 150);
`

const ProjectItem = ({ cover, title, direction, slug }) => {
    return (
        <Item to={`articles/${slug}`}>
            <TextContent>
                <Caption strip> {direction} Project </Caption>
                <H3 strip mb={3} mt={-2}>
                    {title}
                </H3>
            </TextContent>
            <ProjectBackground fluid={cover.fluid} />
        </Item>
    )
}

export default ProjectItem
