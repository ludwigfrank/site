import React from 'react'

import { Wrapper } from './styles'
import ProjectItem from './ProjectItem'

const ProjectFooter = ({ projects, activeProjectSlug }) => {
    const activeProjectIndex = projects.findIndex(project => {
        return project.node.frontmatter.slug === activeProjectSlug
    })

    const prevProjectIndex =
        activeProjectIndex === 0 ? projects.length - 1 : activeProjectIndex - 1
    const nextProjectIndex =
        activeProjectIndex === projects.length - 1 ? 0 : activeProjectIndex + 1

    return (
        <Wrapper mb={5} mt={7}>
            {/*<ProjectItem
                cover={
                    projects[prevProjectIndex].node.frontmatter.coverImg
                        .childImageSharp
                }
                title={projects[prevProjectIndex].node.frontmatter.title}
                direction={'Previous'}
            />*/}
            <ProjectItem
                slug={projects[nextProjectIndex].node.frontmatter.slug}
                cover={
                    projects[nextProjectIndex].node.frontmatter.coverImg !==
                    null
                        ? projects[nextProjectIndex].node.frontmatter.coverImg
                              .childImageSharp
                        : null
                }
                title={projects[nextProjectIndex].node.frontmatter.title}
                direction={'Next'}
            />
        </Wrapper>
    )
}

export default ProjectFooter
