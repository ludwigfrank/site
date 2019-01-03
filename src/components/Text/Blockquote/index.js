import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import headerDefaultStyle from '../Heading/headerDefaultStyle'
import { space } from 'styled-system'

const Styles = styled('blockquote')`
    ${defaultStyles};
    font-size: 24px;
    margin: 0;
    > * > p {
        ${headerDefaultStyle}
        color: ${props => props.theme.color.text.secondary};
        font-size: 26px;
        line-height: 34px;
    }
    ${space};
`

const Blockquote = ({ children, ...props }) => {
    return (
        <Styles {...props} mx={[0, 2, 2]} my={[2, 5, 5]}>
            {children}
        </Styles>
    )
}

export default Blockquote
