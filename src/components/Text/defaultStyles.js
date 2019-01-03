import { css } from 'styled-components'
import { space } from 'styled-system'

const defaultStyles = css`
    font-family: 'GTAmerica','Theinhardt','SuisseIntl-Regular', 'GTAmerica-Regular', 'Adelle Sans',
        'MaisonNeue-Book', sans-serif;
    font-size: 21px;
    line-height: 30px;
    font-weight: normal;
    color: ${props => props.theme.color.text.secondary};
    ${props =>
        props.themeColor &&
        css`
            color: ${props.theme.color.text[props.themeColor]};
        `}
    ${props =>
        props.strip &&
        css`
            margin: 0;
        `}
    ${props =>
        props.color &&
        css`
            color: ${props.color};
        `}
    ${({ align }) =>
        align &&
        css`
            text-align: ${align};
        `}
    ${space}
`

export default defaultStyles
