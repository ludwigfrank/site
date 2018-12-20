import { css } from 'styled-components'
import { space } from 'styled-system'

const defaultStyles = css`
    font-family: 'SuisseIntl-Regular', 'GTAmerica-Regular', 'Adelle Sans',
        'MaisonNeue-Book', sans-serif;
    font-size: 19px;
    line-height: 28px;
    font-weight: 500;
    color: ${props => props.theme.color.text.primary};
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
    ${space}
`

export default defaultStyles
