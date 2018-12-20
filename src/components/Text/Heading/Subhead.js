import React from 'react'
import styled from 'styled-components'
import { Paragraph } from '../'
import defaultStyles from '../defaultStyles'

const Styles = styled('span')`
    ${defaultStyles};
    color: ${props => props.theme.color.text.primary};
    font-family: 'GTAmerica-Medium';
    font-weight: 500;
`

const Subhead = props => {
    return <Styles> {props.children} </Styles>
}

export default Subhead
