import React from 'react'
import { StyledVideo } from './styles'
import ContentWrapper from '$components/Layout/ContentWrapper'

const Video = ({ src, width, height, type = 'video/mp4' }) => {
    return (
        <ContentWrapper py={[2, 5, 5]}>
            <StyledVideo>
                <video
                    loop
                    autoPlay
                    width={width ? width : 'auto'}
                    height={height ? height : '100%'}
                >
                    <source src={src} type={type} />
                </video>
            </StyledVideo>
        </ContentWrapper>
    )
}

export default Video
