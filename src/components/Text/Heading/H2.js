import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import headerDefaultStyles from './headerDefaultStyle'
import { media } from '$theme/spacing'

const Styles = styled('h2')`
    ${defaultStyles};
    ${headerDefaultStyles};
    font-size: 40px;
    line-height: 39px;
    ${media.phone`
        font-size: 32px
        line-height: 32px;
    `}
`

const H2 = props => {
    return (
        <Styles
            {...props}
            mt={!props.strip && [5, 6, '96px']}
            mb={!props.strip && [3, 4, 4]}
        >
            {props.children}
        </Styles>
    )
}

export default H2
