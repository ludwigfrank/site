import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { Paragraph } from '$components/Text'

const Wrapper = styled('div')`
    display: inline-block;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    height: 40px;
    line-height: 39px;
    transition: ${props => props.theme.animation.create()};
    border-radius: 4px;

    ${({ type, controlled }) => {
        if (type === 'outline') {
            return css`
                border: 1px solid
                    hsl(${props => props.theme.color.interface.primary});
                padding: 0 24px;
                & :hover {
                    background-color: hsla(
                        ${props => props.theme.color.interface.primary},
                        0.1
                    );
                }
            `
        }
        if (type !== 'outline' && !controlled) {
            return css`
                & :hover {
                    & > span {
                        padding-left: 12px;
                    }
                }
            `
        }
    }}

    > * {
        display: inline-block;
        user-select: none;
    }
`
const pathIdle = css`
    d: path(
        'M16.58,5l-2.5,3a.76.76,0,0,1-.58.27A.78.78,0,0,1,13,8.08.76.76,0,0,1,12.92,7L14.4,5.25H.75a.75.75,0,0,1,0-1.5H14.4L12.92,2a.75.75,0,0,1,1.16-1l2.5,3A.75.75,0,0,1,16.58,5Z'
    );
`
const pathActive = css`
    d: path(
        'M23.83,5l-2.5,3a.76.76,0,0,1-.58.27.78.78,0,0,1-.48-.17A.76.76,0,0,1,20.17,7l1.48-1.77H.75a.75.75,0,0,1,0-1.5h20.9L20.17,2a.75.75,0,1,1,1.16-1l2.5,3A.75.75,0,0,1,23.83,5Z'
    );
`
const enlargeAnimation = keyframes`
  from {
    ${pathIdle};
  }
  to {
    ${pathActive};
  }
`

const translateAnimation = keyframes`
  from {
    transform: translateX(0px) translateY(-1px);
  }
  to {
    transform: translateX(4px) translateY(-1px);
  }
`

const ArrowWrapper = styled('div')`
    margin-left: 8px;
    transform: translateX(0px) translateY(-1px);
    transition: ${props => props.theme.animation.create()};
    svg path {
        transition: ${props => props.theme.animation.create()};
        ${pathIdle};
    }
    ${({ controlled, isHovered }) => {
        if (controlled && isHovered)
            return css`
                animation: ${translateAnimation} 1s ease-in-out infinite
                    alternate;
                svg path {
                    animation: ${enlargeAnimation} 1s ease-in-out infinite
                        alternate;
                }
            `
        else
            return css`
                ${Wrapper}:hover & {
                    animation: ${translateAnimation} 1s ease-in-out infinite
                        alternate;
                    svg path {
                        animation: ${enlargeAnimation} 1s ease-in-out infinite
                            alternate;
                    }
                }
            `
    }}
`

const Button = ({
    onClick,
    disabled,
    type,
    uppercase,
    arrow,
    children,
    isHovered,
    controlled,
}) => {
    return (
        <Wrapper type={type} controlled={controlled}>
            <Paragraph themeColor="accent">{children}</Paragraph>
            {arrow && (
                <ArrowWrapper isHovered={isHovered} controlled={controlled}>
                    <svg width="24px" height="9px" viewBox="0 0 24 9">
                        <path
                            d="M23.58,5l-2.5,3a.76.76,0,0,1-.58.27A.78.78,0,0,1,20,8.08.76.76,0,0,1,19.92,7L21.4,5.25H7.75a.75.75,0,0,1,0-1.5H21.4L19.92,2a.75.75,0,1,1,1.16-1l2.5,3A.75.75,0,0,1,23.58,5Z"
                            fill="#0232BD"
                            fill-rule="nonzero"
                        />
                    </svg>
                </ArrowWrapper>
            )}
        </Wrapper>
    )
}

Button.propTypes = {
    /** On Click */
    onClick: PropTypes.func,
    /** The Button can not be interacted with. */
    disabled: PropTypes.bool,
    /** The Button can not be interacted with. */
    type: PropTypes.oneOf(['default', 'primary', 'basic', 'outline']),
    /** Uppercase typography. */
    uppercase: PropTypes.bool,
    /** Show Arrow. */
    arrow: PropTypes.bool,
}

Button.defaultProps = {
    onClick: () => {
        console.log('Clicked')
    },
    disabled: false,
    type: 'default',
    uppercase: false,
    arrow: true,
}

export default Button
