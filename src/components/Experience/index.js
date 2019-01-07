import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import ExperienceItem from './ExperienceItem'

const Wrapper = styled('ul')`
    margin: 0;
    padding: 0;
    > :not(:last-child) {
        border-bottom: 1px solid
            ${props => props.theme.color.interface.seperator};
    }
    ${space};
`

const Experience = ({ experience }) => {
    return (
        <Wrapper mb={6}>
            {experience.map(item => (
                <ExperienceItem {...item} key={item.company} />
            ))}
        </Wrapper>
    )
}

Experience.propTypes = {
    experience: PropTypes.array,
}

export default Experience
