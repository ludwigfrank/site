import React from 'react'
import styled, { css } from 'styled-components'
import defaultStyles from '../defaultStyles'
import { space } from 'styled-system'

const Styles = styled('p')`
    ${defaultStyles};
    color: ${props => props.theme.color.text.secondary};
`

const Paragraph = ({ children, ...props }) => {
    return <Styles {...props}> {children} </Styles>
}

export default Paragraph
