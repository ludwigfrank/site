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
import { BottomSeperator } from './styles'

const HEADER_SPACING = 2
const renderTeam = team => {
    return (
        <Box mt={5}>
            <Caption mb={HEADER_SPACING} themeColor="tertiary">
                Team
            </Caption>
            <Box
                mx={-3}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                }}
            >
                {team.map(
                    (
                        { name = 'Peter Maffei', responsibility = 'UX Design' },
                        index
                    ) => {
                        return (
                            <Box key={index + name} mb={1} mx={3}>
                                <Footnote
                                    sans
                                    strip
                                    style={{ display: 'inline-block' }}
                                >
                                    {name}
                                </Footnote>
                                <Footnote
                                    strip
                                    mx={2}
                                    themeColor={'tertiary'}
                                    style={{ display: 'inline-block' }}
                                >
                                    {responsibility}
                                </Footnote>
                            </Box>
                        )
                    }
                )}
            </Box>
        </Box>
    )
}

const renderTime = time => {
    return (
        <Box>
            <Caption mb={HEADER_SPACING} themeColor="tertiary">
                Time
            </Caption>
            <Footnote strip sans>
                {Array.isArray(time) ? `${time[0]} — ${time[1]}` : time}
            </Footnote>
        </Box>
    )
}

const renderClient = client => {
    return (
        <Box mt={5}>
            <Caption mb={HEADER_SPACING} themeColor="tertiary">
                Client
            </Caption>
            <Footnote strip sans>
                {client}
            </Footnote>
        </Box>
    )
}

const renderIntroSection = (title, content) => {
    return (
        <Box mt={[5, 5, 5]}>
            <Caption mb={HEADER_SPACING} themeColor="tertiary">
                {title}
            </Caption>
            <Footnote mb={1} mt={0}>
                {content}
            </Footnote>
        </Box>
    )
}

const ArticleMeta = ({ meta }) => {
    const { team, time, description, client, title, role, intro } = meta

    return [
        <ContentWrapper mt={[7, 7, 7]} key="header">
            <H1>{title}</H1>
        </ContentWrapper>,
        <ContentWrapper
            key="content"
            flex
            flexDirection={['column', 'column', 'row']}
            mt={7}
            mb={[4, 4, 7]}
            pb={4}
        >
            <Box width={[1, 1, 1 / 2]}>
                {renderTime(time)}
                {renderClient(client)}
                {renderTeam(team)}
            </Box>
            <Box width={[1, 1, 1 / 2]} style={{ position: 'relative' }}>
                <H3 mt={[5, 5, 1]} pb={[3, 3, 0]} strip>
                    {description}
                </H3>
            </Box>
        </ContentWrapper>,
        <BottomSeperator key="bottom-seperator" mb={[6, 6, 8]} />,
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
