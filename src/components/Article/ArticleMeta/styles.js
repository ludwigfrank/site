import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

export const BottomSeperator = styled('div')`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.color.interface.seperator};
    ${space};
`
