import React from 'react'
import styled from 'styled-components'
import { inputBaseStyle } from '../Input/styles'

const Textarea = styled('textarea')`
    ${inputBaseStyle}
    resize: none;
    height: 340px;
`

export default Textarea
