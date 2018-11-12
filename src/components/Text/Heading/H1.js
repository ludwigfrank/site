import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('h1')`
    ${defaultStyles};
    font-size: 36px;
`

const H1 = props => {
    return <Styles> {props.children} </Styles>
}

export default H1
