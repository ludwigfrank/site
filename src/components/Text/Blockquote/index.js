import React from 'react'
import styled from 'styled-components'
import defaultStyles from '../defaultStyles'
import headerDefaultStyle from '../Heading/headerDefaultStyle'
import { space } from 'styled-system'

const Styles = styled('blockquote')`
    ${defaultStyles};
    font-size: 20px;
    margin: 0;
    > * > p {
        ${headerDefaultStyle}
        color: ${props => props.theme.color.text.accent};
        font-size: 24px;
        line-height: 28px;
    }
    ${space};
`

const Blockquote = ({ children, ...props }) => {
    return (
        <Styles {...props} mx={[0, 2, 2]} my={[2, '40px', '40px']}>
            {children}
        </Styles>
    )
}

export default Blockquote
