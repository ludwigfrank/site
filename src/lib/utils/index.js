export const generateIdFromString = string => {
    return string.replace(new RegExp('/', 'g'), '-').substr(1)
}
