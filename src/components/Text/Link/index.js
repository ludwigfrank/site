import React from 'react'
import styled, { css } from 'styled-components'
import defaultStyles from '../defaultStyles'
import GatsbyLinkComponent from 'gatsby-link'

const linkStyles = css`
    border-bottom: 1px solid rgba(48, 48, 48, 0.2);
    transition: ${props => props.theme.animation.create()};
    cursor: pointer;
    text-decoration: none;
    font-size: inherit;
    color: inherit;
    :hover {
        border-bottom: 1px solid ${props => props.theme.color.text.accent};
    }
`

const Styles = styled('a')`
    ${defaultStyles};
    ${linkStyles};
`

const GatsbyLink = styled(GatsbyLinkComponent)`
    ${defaultStyles};
    ${linkStyles};
`

const Link = ({ children, to, href, ...props }) => {
    if (to) {
        return <GatsbyLink to={to}>{children}</GatsbyLink>
    }

    return (
        <Styles {...props} href={href} target="_blank">
            {children}
        </Styles>
    )
}

export default Link
