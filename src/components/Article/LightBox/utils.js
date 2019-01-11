export const createPortalContainer = tag => {
    const portal = document.createElement(tag)
    document.body.appendChild(portal)
    return portal
}
