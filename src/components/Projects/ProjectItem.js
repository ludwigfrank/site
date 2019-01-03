import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Box } from '@rebass/grid'
import { H2, Footnote } from '$components/Text'
import ParallaxImage from '../Image/ParallaxImage'
import { Link } from 'gatsby'
import { media } from '$theme/spacing'

const colors = ['#FFDD87', '#FD9796', '#A98CED', '#FD9796']

const Wrapper = styled('div').attrs(props => ({}))`
    background: #f7f9fa;
    display: inline-block;
    list-style: none;
    width: 100%;
    overflow: hidden;
    transition: ${props => props.theme.animation.create()};
    &:hover {
        background: ${props => colors[props.index]};
    }
    ${space}
`

const ImgWrapper = styled('div')`
    width: 100%;
    overflow: hidden;
    margin-top: -40px;
    ${media.tablet`
            margin-left: -${props => props.theme.spacing.contentPadding};
            width: ${props =>
                'calc(100% + ' +
                parseInt(props.theme.spacing.contentPadding) * 2 +
                'px)'} ;
        `}
    transition: ${props => props.theme.animation.create()};
    ${space};
`

const ImgWrapperInner = styled('div')`
    transition: ${props => props.theme.animation.create()};
`

class ProjectItem extends React.Component {
    render() {
        const { title, description, coverImg, slug, index } = this.props
        return (
            <Link to={`articles/${slug}`}>
                <Wrapper
                    mb={[0, 4]}
                    index={index}
                    mt={index === 0 ? [2, 6] : 0}
                >
                    <Box p={[4, 5, 6]}>
                        <H2 mb={3} mt={2} strip style={{ fontWeight: 600 }}>
                            {title}
                        </H2>
                        <Footnote
                            mt={4}
                            style={{
                                lineHeight: '24px',
                                color: 'rgba(0,0,0,0.76)',
                            }}
                        >
                            {description}
                        </Footnote>
                    </Box>
                    <ImgWrapper id="img">
                        <ImgWrapperInner id="imgInner">
                            <ParallaxImage
                                fluid={coverImg.childImageSharp.fluid}
                            />
                        </ImgWrapperInner>
                    </ImgWrapper>
                </Wrapper>
            </Link>
        )
    }
}

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

export default ProjectItem
