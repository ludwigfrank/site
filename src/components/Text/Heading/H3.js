import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import headerDefaultStyles from './headerDefaultStyle'
import { media } from '$theme/spacing'

const Styles = styled('h3')`
    ${defaultStyles};
    ${headerDefaultStyles};
    font-size: 27px;
    padding-top: 4px;
    line-height: 32px;
    ${media.phone`
        font-size: 23px;
        line-height: 28px;
    `};
`

const H3 = props => {
    return (
        <Styles
            mt={!props.strip && [4, 40, 40]}
            mb={!props.strip && [2, 3, 3]}
            {...props}
        >
            {' '}
            {props.children}{' '}
        </Styles>
    )
}

export default H3
