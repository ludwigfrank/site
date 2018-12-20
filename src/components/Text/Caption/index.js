import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('p')`
    margin: 0;
    ${defaultStyles};
    color: ${props => props.theme.color.text.secondary};
    font-size: 17px;
    opacity: 0.75;
`

const Caption = ({ children, ...props }) => {
    return <Styles {...props}> {children} </Styles>
}

export default Caption
