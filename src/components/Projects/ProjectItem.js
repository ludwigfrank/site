import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { H3, Description } from '$components/Text'
import Img from 'gatsby-image'
import ParallaxImage from '../Image/ParallaxImage'
import { Link } from 'gatsby'
import { media } from '$theme/spacing'

const Wrapper = styled('li')`
    display: inline-block;
    list-style: none;
    width: 100%;
    &:hover #img {
        transform: scale(0.95);
    }
    &:hover #imgInner {
        transform: scale(1.05);
    }

    ${space}
`

const ImgWrapper = styled('div')`
    width: 100%;
    overflow: hidden;
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

const TextWrapper = styled('div')`
    max-width: 420px;
    margin: 0 auto;
    > * {
        text-align: center;
    }
`

class ProjectItem extends React.Component {
    render() {
        const { title, description, date, coverImg, slug } = this.props
        return (
            <Link to={`articles/${slug}`}>
                <Wrapper mb={5}>
                    <ImgWrapper id="img">
                        <ImgWrapperInner id="imgInner">
                            <ParallaxImage
                                fluid={coverImg.childImageSharp.fluid}
                            />
                        </ImgWrapperInner>
                    </ImgWrapper>
                    <TextWrapper>
                        <H3 mb={3} mt={4}>
                            {title}
                        </H3>
                        <Description mt={0}> {description} </Description>
                    </TextWrapper>
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
