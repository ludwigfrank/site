import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectItem from '$components/Projects/ProjectItem'
import Mauerwerk from '$components/Mauerwerk'
import { sizes } from '$theme/spacing'

const Wrapper = styled('div')`
    list-style: none;
    padding: 0;
    width: 100%;
`

const breakpointColumnsObj = {
    default: 2,
    [sizes.tablet]: 1,
}

const ProjectList = ({ projects }) => (
    <Wrapper>
        {/* <li>
            <H4 mb={5} />
        </li> */}
        <Mauerwerk
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {projects.map((project, index) => (
                <ProjectItem
                    index={index}
                    {...project.node.frontmatter}
                    key={project.node.id}
                />
            ))}
        </Mauerwerk>
    </Wrapper>
)

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
}

export default ProjectList
