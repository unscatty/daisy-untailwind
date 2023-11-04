import themeDefaults from './daisy-untailwind/theming/themeDefaults'

// Re-export styles
export * from './daisy-untailwind/styles'

const { themeOrder, variables: themeVariables } = themeDefaults

export { default as colorNames } from './daisy-untailwind/theming/colorNames'
export { default as colorFunctions } from './daisy-untailwind/theming/functions'
export { default as themeColors } from './daisy-untailwind/theming/index'
export { default as themes } from './daisy-untailwind/theming/themes'
export { themeOrder, themeVariables }

export { type Theme as DefaultThemeNames } from '../daisy-src/src/index'
