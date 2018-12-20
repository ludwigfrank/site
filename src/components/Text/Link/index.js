import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('a')`
    ${defaultStyles};
    color: ${props => props.theme.color.interface.primary};
`

const Link = ({ children, ...props }) => {
    return <Styles {...props}> {children} </Styles>
}

export default Link
