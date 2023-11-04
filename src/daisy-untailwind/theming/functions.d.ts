import { CssInJs } from '../../types'

declare const colorFunctions: {
  changeColorValuesToObject(input: string): {
    h: number
    s: number
    l: number
    a: number
  }

  turnColorValuesToString(input: string): string
  generateForegroundColorFrom(input: string, percentage?: number): string
  generateDarkenColorFrom(input: string, percentage?: number): string

  injectThemes(
    addBase: (theme: CssInJs) => void,
    config: (key: string) => unknown,
    themes: Record<string, Record<string, string>>,
    colorFunction: 'hsl' | 'lch'
  ): void
  convertColorFormat(
    input: Record<string, string>,
    colorFunction?: 'hsl' | 'lch'
  ): Record<string, string>
}

export default colorFunctions
