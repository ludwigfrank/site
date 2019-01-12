import React from 'react'
import PropTypes from 'prop-types'
import { easing, tween, styler, delay, chain } from 'popmotion'

import { Description } from '$components/Text'
import { Wrapper } from './styles'

export default class Hint extends React.Component {
    render() {
        return (
            <Wrapper>
                <Description strip>{this.props.children}</Description>
            </Wrapper>
        )
    }
}
