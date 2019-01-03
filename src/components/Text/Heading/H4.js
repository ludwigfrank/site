import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import headerDefaultStyles from './headerDefaultStyle'
import { media } from '$theme/spacing'

const Styles = styled('h4')`
    ${defaultStyles};
    ${headerDefaultStyles};
    font-size: 24px;
    line-height: 24px;
    ${media.phone`
        font-size: 20px;
        line-height: 24px;
    `}
`

const H4 = props => {
    return <Styles {...props}> {props.children} </Styles>
}

export default H4
