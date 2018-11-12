import { THEME_DARK, THEME_LIGHT } from './constants'

const shadowKeyUmbraOpacity = {
    [THEME_LIGHT]: 0.1,
    [THEME_DARK]: 0.3,
}

const shadowKeyPenumbraOpacity = {
    [THEME_LIGHT]: 0.08,
    [THEME_DARK]: 0.2,
}

const shadowAmbientShadowOpacity = {
    [THEME_LIGHT]: 0.06,
    [THEME_DARK]: 0.18,
}

const shadows = {
    0: [
        [0, 0, 0, 0], // KeyUmbra
        [0, 0, 0, 0], // PenUmbra
        [0, 0, 0, 0], // Ambient
    ],
    1: [[0, 1, 3, 0], [0, 1, 1, 0], [0, 2, 1, -1]],
    2: [[0, 1, 5, 0], [0, 2, 2, 0], [0, 3, 1, -2]],
    3: [[0, 1, 8, 0], [0, 3, 4, 0], [0, 3, 3, -2]],
    4: [[0, 2, 4, -1], [0, 4, 5, 0], [0, 1, 10, 0]],
    6: [[0, 3, 5, -1], [0, 6, 10, 0], [0, 1, 18, 0]],
    7: [[0, 6, 6, -3], [0, 10, 14, 1], [0, 4, 18, 3]],
    8: [[0, 4, 5, -2], [0, 7, 10, 1], [0, 2, 16, 1]],
}

const createShadowStyles = (shadows, theme = THEME_LIGHT) => {
    const shadowStyles = {}

    for (let k in shadows) {
        const currentShadowStyles = shadows[k]
        const key = currentShadowStyles[0]
        const pen = currentShadowStyles[1]
        const amb = currentShadowStyles[2]

        shadowStyles[k] = [
            `${key[0]}px ${key[1]}px ${key[2]}px ${key[3]}px rgba(0, 0, 0, ${
                shadowKeyUmbraOpacity[theme]
            })`,
            `${pen[0]}px ${pen[1]}px ${pen[2]}px ${pen[3]}px rgba(0, 0, 0, ${
                shadowKeyPenumbraOpacity[theme]
            })`,
            `${amb[0]}px ${amb[1]}px ${amb[2]}px ${amb[3]}px rgba(0, 0, 0, ${
                shadowAmbientShadowOpacity[theme]
            })`,
        ].join(',')
    }

    return shadowStyles
}

export default createShadowStyles(shadows)
