import { css } from 'styled-components'
import TheinhardtRegularWOFF from './subset-Theinhardt-Rg.woff'
import TheinhardtRegularWOFF2 from './subset-Theinhardt-Rg.woff2'
import TheinhardtMediumWOFF from './subset-Theinhardt-Md.woff'
import TheinhardtMediumWOFF2 from './subset-Theinhardt-Md.woff2'

export default css`
    @font-face {
        font-family: 'Theinhardt';
        src: url(${TheinhardtMediumWOFF2}) format('woff2'),
            url(${TheinhardtMediumWOFF}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Theinhardt';
        src: url(${TheinhardtRegularWOFF2}) format('woff2'),
            url(${TheinhardtRegularWOFF}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`
