import React from 'react'
import PropTypes from 'prop-types'
import ContentWrapper from '$components/Layout/ContentWrapper'
import ArticleWrapper from '$components/Layout/ArticleWrapper'

import { Wrapper, InnerWrapper } from './styles'

const Grid = ({
    children,
    wrapper = 'content',
    maxHeight = 600,
    itemsPerRow = 3,
}) => {
    const OuterWrapper = wrapper === 'content' ? ContentWrapper : ArticleWrapper

    return (
        <OuterWrapper stripMobile mb={[2, 5, 5]}>
            <Wrapper>
                {React.Children.map(children, (element, id) => {
                    return (
                        <InnerWrapper
                            flexGrow={
                                element.props.width || element.props.height
                                    ? 0
                                    : 1
                            }
                        >
                            {React.cloneElement(element, {
                                maxHeight: '700px',
                                shadow: false,
                                borderRadius: false,
                            })}
                        </InnerWrapper>
                    )
                })}
            </Wrapper>
        </OuterWrapper>
    )
}

Grid.propTypes = {
    wrapper: PropTypes.oneOf(['content', 'article']),
    maxHeight: PropTypes.string,
}

export default Grid
