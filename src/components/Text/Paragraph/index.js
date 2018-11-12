import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('p')`
    ${defaultStyles};
    color: ${props => props.theme.color.text.secondary};
`

const Paragraph = props => {
    return <Styles> {props.children} </Styles>
}

export default Paragraph
