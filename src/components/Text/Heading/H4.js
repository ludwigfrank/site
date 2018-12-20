import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('h4')`
    ${defaultStyles};
    font-size: 20px;
`

const H4 = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default H4
