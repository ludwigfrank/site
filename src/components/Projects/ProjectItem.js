import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

const Wrapper = styled('div')``

const ProjectItem = ({ title, description, date }) => {}

ProjectItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
}

ProjectItem.defaultProps = {
    title: 'Project Title',
    description: `This is a normal length project description. Please add a small project description to the project. It will feel so much more complete`,
    date: '2014 – 2019',
}
