export const getElementWidth = ({ imgSrc, maxHeight }, context) => {
    const ratio = context[imgSrc].childImageSharp.fluid.aspectRatio
    if (maxHeight) return `${Math.round(ratio * maxHeight)}px`
    else return 'auto'
}

export const getElementDimensions = ({ imgSrc, width, height }, context) => {
    const ratio = context[imgSrc].childImageSharp.fluid.aspectRatio

    let finalWidth = width
        ? width
        : height
        ? `${Math.round(ratio * height)}px`
        : '100%'
    let finalHight = height
        ? height
        : width
        ? `${Math.round(ratio / width)}px`
        : '100%'

    return {
        width: finalWidth,
        height: finalHight,
    }
}
