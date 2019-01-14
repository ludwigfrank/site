import React from 'react'
import PropTypes from 'prop-types'

const defaults = {
    patternSize: 64,
    patternScaleX: 1,
    patternScaleY: 1,
    patternRefreshInterval: 4,
    patternAlpha: 244,
    patternPixelDataLength: 64 * 64 * 4,
}

let frame = 0

export default class Grain extends React.Component {
    constructor(props) {
        super(props)

        this.canvas = React.createRef()

        this.state = {
            canvasHeight: 500,
            canvasWidth: 460,
        }
    }

    update = () => {
        let value

        for (let i = 0; i < defaults.patternPixelDataLength; i += 4) {
            value = (Math.random() * 255) | 0

            this.patternData.data[i] = value
            this.patternData.data[i + 1] = value
            this.patternData.data[i + 2] = value
            this.patternData.data[i + 3] = 25
        }

        this.patternCtx.putImageData(this.patternData, 0, 0)
    }

    draw = () => {
        this.canvasCtx.clearRect(
            0,
            0,
            this.state.canvasWidth,
            this.state.canvasHeight
        )

        const pattern = this.canvasCtx.createPattern(
            this.patternCanvas,
            'repeat'
        )

        this.canvasCtx.fillStyle = pattern
        this.canvasCtx.fillRect(
            0,
            0,
            this.state.canvasWidth,
            this.state.canvasHeight
        )
    }

    tick = () => {
        this.update()
        this.draw()

        requestAnimationFrame(this.tick)
    }

    componentDidMount = () => {
        this.canvasCtx = this.canvas.current.getContext('2d')
        this.patternCanvas = document.createElement('canvas')
        this.patternCanvas.width = defaults.patternSize
        this.patternCanvas.height = defaults.patternSize
        this.patternCtx = this.patternCanvas.getContext('2d')
        this.patternData = this.patternCtx.createImageData(
            defaults.patternSize,
            defaults.patternSize
        )

        const { width, height } = this.canvas.current.getBoundingClientRect()
        this.canvasWidth = Math.ceil(width)
        this.canvasHeight = Math.ceil(height)
        this.setState({
            canvasHeight: Math.ceil(height),
            canvasWidth: Math.ceil(width),
        })

        this.tick()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.canvasWidth !== this.state.canvasWidth) {
            this.setState({
                canvasWidth: Math.ceil(
                    this.canvas.current.getBoundingClientRect().width
                ),
            })
        }
    }

    render() {
        return (
            <canvas
                width={this.state.canvasWidth}
                height={this.state.canvasHeight}
                ref={this.canvas}
                style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 50,
                    position: 'absolute',
                    left: 0,
                }}
            />
        )
    }
}

Grain.propTypes = {}
