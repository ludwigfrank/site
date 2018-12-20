import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('span')`
    ${defaultStyles};
    font-size: 35px;
    line-height: 40px;
    font-family: 'FoundersGrotesk-Regular';
`

const Callout = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default Callout
