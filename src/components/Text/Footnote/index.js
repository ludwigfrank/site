import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import { space } from 'styled-system'

const Styles = styled('p')`
    ${defaultStyles};
    color: ${props =>
        props.primary
            ? props.theme.color.text.primary
            : props.theme.color.text.secondary};
    font-size: 17px;
`

const Footnote = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default Footnote
