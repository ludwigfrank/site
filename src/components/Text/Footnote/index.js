import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import { media } from '$theme/spacing'

const Styles = styled('p')`
    color: ${props => props.theme.color.text.secondary};
    ${defaultStyles};
    font-size: 19px;
    line-height: 26px;
    ${media.phone`
        font-size: 17px;
        line-height: 23px;
    `}
`

const Footnote = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default Footnote
