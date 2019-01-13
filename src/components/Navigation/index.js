import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, { PureComponent } from 'react'
import defaultStyles from '../Text/defaultStyles'
import { space } from 'styled-system'

import { media } from '$theme/spacing'
import Logo from './logo'
import { Link } from 'gatsby'
import HeadRoom from './util/HeadRoom'

const Wrapper = styled('div')`
    width: 100%;
    height: ${props => props.height};
    background-color: rgba(0, 0, 0, 0);
    z-index: 400;
    transform: translateZ(0);
`

const InnerWrapper = styled('div')`
    max-width: ${props => props.theme.spacing.contentMaxWidth};
    margin: 0 auto;
    height: 100%;
    line-height: 64px;
    ${space};
`

const Left = styled('div')`
    display: inline-block;
`

const Right = styled('div')`
    float: right;
    display: inline-block;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    ${defaultStyles}
    margin-left: 24px;
    font-size: 18px;
    line-height: 26px;
    opacity: 0.85;
    ${media.phone`
        font-size: 16px;
        line-height: 23px;
    `}
`

const LogoFont = styled('span')`
    font-family: 'Recoleta';
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.color.text.primary};
`

const links = [
    {
        name: 'Projects',
        href: '/#projects',
    },
    {
        name: 'My Story',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
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
            <StyledLink
                to={link.href}
                key={link.name}
                activeStyle={{
                    opacity: 1,
                    color: 'black',
                }}
            >
                {link.name}
            </StyledLink>
        ))
    }

    get disableHeadRoom() {
        try {
            return !window.location.href.includes('article')
        } catch (e) {
            console.log(e)
        }

        return true
    }

    render() {
        return (
            <HeadRoom
                unPinOnStart={this.props.unPinOnStart}
                disable={this.disableHeadRoom}
            >
                <Wrapper height={this.props.height}>
                    <InnerWrapper px={[3, 5, 5]}>
                        <Left>
                            <Link
                                to={'/'}
                                key={'/'}
                                activeStyle={{ color: 'black' }}
                                style={{ textDecoration: 'none' }}
                            >
                                {/*<Logo mt={'5px'} /> */}
                                <LogoFont>Ludwig Frank</LogoFont>
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
