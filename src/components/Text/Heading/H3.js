import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'

const Styles = styled('h3')`
    ${defaultStyles};
    font-size: 26px;
    font-family: 'FoundersGrotesk-Regular';
    padding-top: 4px;
    line-height: 30px;
`

const H3 = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default H3
