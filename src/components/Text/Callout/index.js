import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import headerDefaultStyles from '../Heading/headerDefaultStyle'
import { media } from '$theme/spacing'

const Styles = styled('span')`
    ${defaultStyles};
    ${headerDefaultStyles}
    color: ${props => props.theme.color.text.primary};
    font-size: 35px;
    line-height: 40px;
    font-weight: 400;

`

const Callout = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default Callout
