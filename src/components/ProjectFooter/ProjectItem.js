import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { H3, Caption } from '$components/Text'

const Item = styled('div')`
    width: calc(50% - 12px);
    height: 100%;
    text-align: center;
    position: relative;
    display: inline-block;
    bottom: 0;
`

const TextContent = styled('div')``

const ProjectBackground = styled(Image)`
    width: 100%;
    height: 200px;
`

const ProjectItem = ({ cover, title, direction }) => {
    return (
        <Item>
            <TextContent>
                <Caption strip> {direction} Project </Caption>
                <H3 strip mb={3} mt={-1}>
                    {title}
                </H3>
            </TextContent>
            <ProjectBackground fluid={cover.fluid} />
        </Item>
    )
}

export default ProjectItem
