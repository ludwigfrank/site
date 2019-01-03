import React from 'react'

import ContentWrapper from '$components/Layout/ContentWrapper'
import { Description } from '$components/Text'
import { Emojis, BottomTextWrapper } from './styles'

const Footer = () => {
    return (
        <ContentWrapper>
            <BottomTextWrapper py={4}>
                <Description>Copyright 2018 Ludwig Frank</Description>
                <Description>
                    Selfmade with a lot of <Emojis />
                </Description>
            </BottomTextWrapper>
        </ContentWrapper>
    )
}

export default Footer
