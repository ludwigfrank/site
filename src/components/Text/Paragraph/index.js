import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import { media } from '$theme/spacing'

const Styles = styled('p')`
    color: ${props => props.theme.color.text.secondary};
    ${defaultStyles};
    line-height: 30px;
    ${media.phone`
        font-size: 18px;
        line-height: 26px;
    `}
`

const Paragraph = ({ children, ...props }) => {
    return <Styles {...props}> {children} </Styles>
}

export default Paragraph
