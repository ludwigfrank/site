import React from 'react'
import PropTypes from 'prop-types'
import { Footnote, H4 } from '$components/Text'
import styled from 'styled-components'
import { space } from 'styled-system'
import { media } from '$theme/spacing'

const Wrapper = styled('li')`
    display: flex;
    flex-direction: row;
    ${media.tablet`
        flex-direction: column;
        > * {
            margin-bottom: 16px;
        }
    `}
    ${space}
`

const Left = styled('div')`
    min-width: 300px;
`

const Right = styled('div')`
    margin: 0;
`

const ExperienceItem = ({ company, text, time, location, role }) => {
    return (
        <Wrapper py={[5, 5, 6]}>
            <Left>
                <Footnote strip themeColor={'secondary'} pt={'3px'} mb={'-1px'}>
                    {time[0]} — {time[1]}
                </Footnote>
                <Footnote strip themeColor={'tertiary'}>
                    {location}
                </Footnote>
            </Left>
            <Right>
                <H4 strip mb={[1, 1, 1]}>
                    {company}
                </H4>
                <Footnote strip themeColor={'tertiary'}>
                    {role}
                </Footnote>
                <Footnote strip mt={[2, 2, 2]}>
                    {text}
                </Footnote>
            </Right>
        </Wrapper>
    )
}

ExperienceItem.propTypes = {
    company: PropTypes.string.isRequired,
    text: PropTypes.string,
    time: PropTypes.array,
    location: PropTypes.string,
    role: PropTypes.string,
}

export default ExperienceItem
