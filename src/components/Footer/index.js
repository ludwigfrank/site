import React from 'react'

import ContentWrapper from '$components/Layout/ContentWrapper'
import { Paragraph, Link } from '$components/Text'
import { Emojis, BottomTextWrapper } from './styles'

const Footer = () => {
    return (
        <ContentWrapper>
            <BottomTextWrapper py={5}>
                <Paragraph>Ludwig Frank © 2019</Paragraph>
                <Paragraph>
                    <Link href={'https://dribbble.com/LudwigFrank'}>
                        Dribbble
                    </Link>
                    ,{' '}
                    <Link href={'https://github.com/ludwigfrank'}>Github</Link>,{' '}
                    <Link
                        href={
                            'https://www.linkedin.com/in/ludwig-frank-0667a8ab/'
                        }
                    >
                        Linkedin
                    </Link>
                    , <Link href={'https://medium.com/@ludi'}>Medium</Link>
                </Paragraph>
            </BottomTextWrapper>
        </ContentWrapper>
    )
}

export default Footer
