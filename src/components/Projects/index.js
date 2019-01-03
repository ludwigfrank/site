import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContentWrapper from '$components/Layout/ContentWrapper'
import ProjectList from './ProjectList'

export default class Projects extends Component {
    render() {
        return (
            <ContentWrapper stripMobile mt={[2, 4, 6]}>
                <ProjectList projects={this.props.projects} />
            </ContentWrapper>
        )
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
}

Projects.defaultProps = {
    projects: [],
}
