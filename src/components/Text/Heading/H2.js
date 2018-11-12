import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('h2')`
    ${defaultStyles};
    font-size: 30px;
`

const H2 = props => {
    return <Styles> {props.children} </Styles>
}

export default H2
