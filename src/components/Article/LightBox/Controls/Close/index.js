import React from 'react'

import { Wrapper, StyledClose } from './styles'

const Close = ({ handleClick }) => {
    return (
        <Wrapper onClick={() => handleClick()}>
            <StyledClose />
        </Wrapper>
    )
}

export default Close
