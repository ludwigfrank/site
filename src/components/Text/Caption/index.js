import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('p')`
    margin: 0;
    color: ${props => props.theme.color.text.tertiary};
    ${defaultStyles};
    font-size: 18px;
`

const Caption = ({ children, ...props }) => {
    return <Styles {...props}> {children} </Styles>
}

export default Caption
