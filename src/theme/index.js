import light from './light'
import dark from './dark'

export const getTheme = (themetype) => {
    return String(themetype).toLowerCase() === 'dark' ?
        dark : String(themetype).toLowerCase() === 'light' ?
            light : {}
}
