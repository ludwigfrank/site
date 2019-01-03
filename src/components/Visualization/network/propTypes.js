import PropTypes from 'prop-types'

export const typePoint = PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
})

export const typeLink = PropTypes.shape({
    source: point,
    tartget: point,
})
