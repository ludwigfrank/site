import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectItem from '$components/Projects/ProjectItem'
import ContentWrapper from '$components/Layout/ContentWrapper'
import { H4 } from '$components/Text'
import { media } from '$theme/spacing'

const Wrapper = styled('ul')`
    list-style: none;
    padding: 0;
    column-count: 2;
    column-gap: 2em;
    width: 100%;
    ${media.tablet`
        column-count: 1;`}
`

const ProjectList = ({ projects }) => (
    <Wrapper>
        <li>
            <H4 mb={5} />
        </li>
        {projects.map(project => (
            <ProjectItem {...project.node.frontmatter} key={project.node.id} />
        ))}
    </Wrapper>
)

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
}

export default ProjectList
