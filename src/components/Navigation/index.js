import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, { PureComponent } from 'react'

import { Link } from 'gatsby'
import HeadRoom from './util/HeadRoom'

const Wrapper = styled('div')`
    width: 100%;
    height: ${props => props.height};
    background-color: white;
    z-index: 400;
    transform: translateZ(0);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const InnerWrapper = styled('div')`
    max-width: ${props => props.theme.spacing.contentMaxWidth};
    margin: 0 auto;
    height: 100%;
    padding: 0 ${props => props.theme.spacing.contentPadding};
    line-height: 64px;
`

const Left = styled('div')`
    display: inline-block;
`

const Right = styled('div')`
    float: right;
    display: inline-block;
`

const links = [
    /*   {
        name: 'Projects',
        href: '/projects'
    },*/
    {
        name: 'My Story',
        href: '/about',
    },
    {
        name: 'Writing',
        href: '/writing',
    },
    {
        name: 'Mood',
        href: '/projects/mood',
    },
]

class Navigation extends PureComponent {
    static propTypes = {
        height: PropTypes.string,
        url: PropTypes.object,
        unPinOnStart: PropTypes.bool,
        disableHeadroom: PropTypes.bool,
    }

    static defaultProps = {
        height: '64px',
        disableHeadroom: false,
    }

    renderLinks = links => {
        return links.map(link => (
            <Link to={link.href} key={link.name}>
                {link.name}
            </Link>
        ))
    }

    render() {
        return (
            <HeadRoom
                unPinOnStart={this.props.unPinOnStart}
                disable={this.props.disableHeadroom}
            >
                <Wrapper height={this.props.height}>
                    <InnerWrapper>
                        <Left>
                            <Link to={'/'} key={'/'}>
                                Link
                            </Link>
                        </Left>
                        <Right>{this.renderLinks(links)}</Right>
                    </InnerWrapper>
                    {this.props.children}
                </Wrapper>
            </HeadRoom>
        )
    }
}

export default Navigation
