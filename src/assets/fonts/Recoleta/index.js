import { css } from 'styled-components'
import RecoletaRegularWOFF from './subset-Recoleta-Regular.woff'
import RecoletaRegularWOFF2 from './subset-Recoleta-Regular.woff2'
import RecoletaBoldWOFF from './subset-Recoleta-Bold.woff'
import RecoletaBoldWOFF2 from './subset-Recoleta-Bold.woff2'

export default css`
    @font-face {
        font-family: 'Recoleta';
        src: url(${RecoletaRegularWOFF2}) format('woff2'),
            url(${RecoletaRegularWOFF}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Recoleta';
        src: url(${RecoletaBoldWOFF2}) format('woff2'),
            url(${RecoletaBoldWOFF}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
`
