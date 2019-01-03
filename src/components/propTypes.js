import PropTypes from 'prop-types'

export const imageFixed = PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    base64: PropTypes.string,
    tracedSVG: PropTypes.string,
    srcWebp: PropTypes.string,
    srcSetWebp: PropTypes.string,
})

export const imageFluid = PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    base64: PropTypes.string,
    tracedSVG: PropTypes.string,
    srcWebp: PropTypes.string,
    srcSetWebp: PropTypes.string,
})
