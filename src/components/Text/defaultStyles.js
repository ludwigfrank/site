import { css } from 'styled-components'

const defaultStyles = css`
    font-family: 'Adelle Sans', 'MaisonNeue-Book', 'HelveticaNeue', sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.theme.color.text.primary};
`

export default defaultStyles
