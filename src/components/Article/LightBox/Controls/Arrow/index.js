import React from 'react'

import { Wrapper, StyledArrow } from './styles'

const Arrow = ({ flip, handleClick }) => {
    return (
        <Wrapper
            onClick={() => handleClick()}
            className="prevent-click-away"
            id={`arrow-${flip ? 'left' : 'right'}`}
        >
            <StyledArrow
                flip={flip}
                style={{
                    pointerEvents: 'none',
                    transform: flip ? 'scaleX(-1)' : 'scaleX(1)',
                }}
            />
        </Wrapper>
    )
}

export default Arrow
