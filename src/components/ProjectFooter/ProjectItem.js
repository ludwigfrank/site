import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { H3, Caption } from '$components/Text'
import Link from 'gatsby-link'
import Grain from '$components/Projects/Grain'

const Item = styled(Link)`
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    bottom: 0;
`

const TextContent = styled('div')``

const ProjectBackground = styled(Image)`
    max-width: 600px;
    min-width: 400px;
    max-height: 400px;
    margin: 0 auto;
`

const ProjectBackgroundWrapper = styled('div')`
    width: 100%;
    height: 100%;
    position: relative;
    background: #fcfcff;
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
            {cover && (
                <ProjectBackgroundWrapper>
                    <Grain />
                    <ProjectBackground fluid={cover.fluid} />
                </ProjectBackgroundWrapper>
            )}
        </Item>
    )
}

export default ProjectItem
