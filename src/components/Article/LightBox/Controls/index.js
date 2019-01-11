import React from 'react'

import { Wrapper, ArrowWrapper, CloseWrapper } from './styles'
import Arrow from './Arrow'
import Close from './Close'

const Controls = ({ onPrevClick, onNextClick, onCloseClick }) => {
    return (
        <Wrapper>
            <ArrowWrapper>
                <Arrow flip handleClick={onPrevClick} />
                <Close handleClick={onCloseClick} />
                <Arrow handleClick={onNextClick} />
            </ArrowWrapper>
        </Wrapper>
    )
}

export default Controls
