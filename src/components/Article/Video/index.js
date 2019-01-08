import React from 'react'
import { StyledVideo } from './styles'
import ContentWrapper from '$components/Layout/ContentWrapper'

export default class Video extends React.Component {
    constructor(props) {
        super(props)

        this.videoElement = React.createRef()
    }

    componentDidMount = () => {
        this.videoElement.current.play()
    }

    render() {
        const { src, width, height, type = 'video/mp4' } = this.props
        return (
            <ContentWrapper py={[2, 5, 5]}>
                <StyledVideo>
                    <video
                        ref={this.videoElement}
                        loop
                        autobuffer
                        muted
                        playsinline
                        width={width ? width : '100%'}
                        height={height ? height : '100%'}
                    >
                        <source src={src} type={type} />
                    </video>
                </StyledVideo>
            </ContentWrapper>
        )
    }
}
