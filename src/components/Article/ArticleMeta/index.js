import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    H1,
    H2,
    H3,
    Paragraph,
    Footnote,
    Subhead,
    Caption,
} from '$components/Text'
import ContentWrapper from '$components/Layout/ContentWrapper'
import { Box } from '@rebass/grid'

const HEADER_SPACING = 2
const renderTeam = team => {
    return (
        <Box mt={4}>
            <Caption mb={HEADER_SPACING}>Team</Caption>
            {team.map(
                ({ name = 'Peter Maffei', responsibility = 'UX Design' }) => {
                    return (
                        <Box key={name} mb={2}>
                            <Footnote sans strip mb={-1}>
                                {name}
                            </Footnote>
                            <Caption>{responsibility}</Caption>
                        </Box>
                    )
                }
            )}
        </Box>
    )
}

const renderTime = time => {
    return (
        <Box>
            <Caption mb={HEADER_SPACING}>Time</Caption>
            <Footnote strip sans>
                {Array.isArray(time) ? `${time[0]} — ${time[1]}` : time}
            </Footnote>
        </Box>
    )
}

const renderClient = client => {
    return (
        <Box mt={4}>
            <Caption mb={HEADER_SPACING}>Client</Caption>
            <Footnote strip sans>
                {client}
            </Footnote>
        </Box>
    )
}

const renderRole = role => {
    return <div />
}

const renderIntroSection = (title, content) => {
    return (
        <Box mt={5}>
            <Caption mb={HEADER_SPACING}>{title}</Caption>
            <Footnote mt={0}>{content}</Footnote>
        </Box>
    )
}

const ArticleMeta = ({ meta }) => {
    const { team, time, description, client, title, role, intro } = meta

    return [
        <ContentWrapper mt={214}>
            <H1>{title}</H1>
        </ContentWrapper>,
        <ContentWrapper flex mt={6} mb={6} pb={4}>
            <Box width={1 / 2}>
                {renderTime(time)}
                {renderClient(client)}
                {renderTeam(team)}
            </Box>
            <Box width={1 / 2}>
                <H3 mt={1}>
                    Nauu enables physiologists to better personalize depression
                    therapy and gives the patient feedback on the progress they
                    make.
                </H3>
                {renderIntroSection('Role', role)}
            </Box>
        </ContentWrapper>,
        <div
            style={{
                width: '100%',
                borderBottom: '1px solid rgba(0,0,0,0.15)',
                marginBottom: '180px',
            }}
        />,
    ]
}

ArticleMeta.propTypes = {
    meta: PropTypes.shape({
        team: PropTypes.array,
        time: PropTypes.array,
        description: PropTypes.string,
        title: PropTypes.string,
    }),
}

export default ArticleMeta
