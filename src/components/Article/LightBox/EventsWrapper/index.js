import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { createPortalContainer, removePortalContainer } from '$components/util'
import { Wrapper } from './styles'

export default class EventsWrapper extends Component {
    constructor() {
        super()
        this.portal = createPortalContainer('div')
    }

    componentWillUnmount = () => {
        removePortalContainer(this.portal)
    }

    render() {
        return this.portal
            ? createPortal(
                  <Wrapper>{this.props.children}</Wrapper>,
                  this.portal
              )
            : null
    }
}
