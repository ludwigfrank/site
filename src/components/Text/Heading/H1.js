import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import headerDefaultStyles from './headerDefaultStyle'

const Styles = styled('h1')`
    ${defaultStyles};
    ${headerDefaultStyles};
    font-size: 60px;
    line-height: 55px;
`

const H1 = props => {
    return <Styles> {props.children} </Styles>
}

export default H1
