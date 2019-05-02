import { THEME_DARK, THEME_LIGHT } from './constants'

export default {
    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: {
            [THEME_DARK]: '#fffdfd',
            [THEME_LIGHT]: '#1b1b33',
        },

        secondary: {
            [THEME_DARK]: 'rgba(0,0,0,.84)',
            [THEME_LIGHT]: '#303246',
        },

        tertiary: {
            [THEME_DARK]: '#dedfe0',
            [THEME_LIGHT]: '#7b8188',
        },

        hint: {
            [THEME_DARK]: '#71777d',
            [THEME_LIGHT]: '#95989a',
        },

        white: {
            [THEME_DARK]: '#ffffff',
            [THEME_LIGHT]: '#ffffff',
        },

        accent: {
            [THEME_DARK]: '#0232BD',
            [THEME_LIGHT]: '#0232BD',
        },
    },

    interface: {
        background: {
            [THEME_DARK]: '#121213',
            [THEME_LIGHT]: '#dff2ff',
        },
        primary: {
            [THEME_DARK]: '#0232BD',
            [THEME_LIGHT]: 'rgb(2, 50, 189)',
        },
        seperator: {
            [THEME_DARK]: 'rgba(48, 48, 48, 0.1)',
            [THEME_LIGHT]: 'rgba(48, 48, 48, 0.1)',
        },
    },
}
