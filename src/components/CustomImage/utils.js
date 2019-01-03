export const getElementWidth = ({ imgSrc, maxHeight }, context) => {
    const ratio = context[imgSrc].childImageSharp.fluid.aspectRatio
    if (maxHeight) return `${Math.round(ratio * maxHeight)}px`
    else return 'auto'
}

export const getElementDimensions = ({ imgSrc, width, height }, context) => {
    const ratio = context[imgSrc].childImageSharp.fluid.aspectRatio

    let finalWidth = width
        ? `${width}px`
        : height
        ? `${Math.round(ratio * height)}px`
        : '100%'

    let finalHight = height
        ? `${height}px`
        : width
        ? `${Math.round(width / ratio)}px`
        : '100%'

    if (typeof width === 'string') finalWidth = width
    if (typeof height === 'string') finalHight = height

    return {
        width: finalWidth,
        height: finalHight,
    }
}
