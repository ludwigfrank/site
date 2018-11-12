import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ContentWrapper from '../../components/Layout/ContentWrapper'

export default class Projects extends Component {
    renderProjects = () => {
        const { projects } = this.props
        return projects.map(project => {
            const id = project.node.id
            const { date, description, title, team } = project.node.exports.meta
            return <div key={id}>{title}</div>
        })
    }

    render() {
        return <ContentWrapper>{this.renderProjects()}</ContentWrapper>
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
}

Projects.defaultProps = {
    projects: [],
}
