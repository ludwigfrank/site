import React from 'react'
import styled from 'styled-components'

const Path = styled('path')`
    fill: none;
    stroke: #1a0641;
    stroke-miterlimit: 10;
    stroke-width: 4px;
`

const Wrapper = styled('div')`
    position: fixed;
    z-index: 100;
    width: 400px;
    height: auto;
    top: 120px;
    right: 100px;
    user-select: none;
`

const Hand = props => {
    return (
        <Wrapper>
            <svg viewBox="0 0 672.98 2640.94">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <Path d="M229,2637.76C172,2269.76,12.83,974.35,16.2,670.05.81,269,1,228.76,1,228.76s1.5-58.49,49.07-66.56C88,155.76,108,193.76,109.72,233.75c2.32,53.79,9,215.83,18.56,214.57S155.28,124.09,154.7,83C154,33.83,163.41,7.14,199.85,1.65,239-4.24,263,30.76,263.34,69c.46,51.27-2.09,350.94,6.64,339.47s59.5-276,65.49-318.17,40.76-76.13,70.33-69.8,47.06,42.69,41.07,84.8S379.7,558.86,408.43,555,524.74,446.14,551.66,421.77s56.47-18,67.86,1.18,33.08,47.18-19.88,106-183,231.62-183,231.62S451,1448.76,672,2640.76" />
                    </g>
                </g>
            </svg>
        </Wrapper>
    )
}

export default Hand
