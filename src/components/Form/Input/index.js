import React from 'react'
import PropTypes from 'prop-types'
import { Caption } from '$components/Text'
import { InputWrapper } from './styles'
import Textarea from '../Textarea'

const Input = ({ label, type, name, multiline, placeholder, onChange }) => {
    let InputComponent = multiline ? Textarea : InputWrapper

    return (
        <Caption mb={[3, 4, 4]} themeColor="hint">
            {label}
            <InputComponent
                type={type}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                px={[4, 4, 4]}
                pt={['16px', '16px', '16px']}
                pb={['14px', '14px', '14px']}
            />
        </Caption>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOfType(['text', 'number', 'email']).isRequired,
    autoComplete: PropTypes.oneOfType(['on', 'off']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
}

Input.defaultProps = {
    multiline: false,
    type: 'text',
    placeholder: 'This is a placeholder',
}

export default Input
