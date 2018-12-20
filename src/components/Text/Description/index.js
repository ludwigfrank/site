import React from 'react'
import styled, { css } from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('p')`
    ${defaultStyles};
    color: ${props => props.theme.color.text.hint};
    font-size: 16px;
    line-height: 22px;
`

const Description = ({ children, ...props }) => {
    return <Styles {...props}> {children} </Styles>
}

export default Description
