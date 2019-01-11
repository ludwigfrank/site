import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

const Container = ({ ...props }) => {
    return <div id="lightbox" {...props} />
}

export default Container
