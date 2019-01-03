import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, { PureComponent } from 'react'
import defaultStyles from '../Text/defaultStyles'
import { space } from 'styled-system'

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
    font-size: 16px;
    margin-left: 24px;
    opacity: 0.65;
`

const LogoFont = styled('span')`
    font-family: 'Recoleta';
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.color.text.primary};
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
                }}
            >
                {link.name}
            </StyledLink>
        ))
    }

    render() {
        return (
            <HeadRoom
                unPinOnStart={this.props.unPinOnStart}
                disable={this.props.disableHeadroom}
            >
                <Wrapper height={this.props.height}>
                    <InnerWrapper px={[4, 5, 5]}>
                        <Left>
                            <Link
                                to={'/'}
                                key={'/'}
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
