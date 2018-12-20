import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('h2')`
    ${defaultStyles};
    font-size: 42px;
    font-family: 'FoundersGrotesk-Regular';
`

const H2 = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default H2
