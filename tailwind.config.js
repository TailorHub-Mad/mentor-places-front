/** @type {import('tailwindcss').Config} */

import { breakpoints } from './src/app/ui/theme/foundations/breakpoints.theme'
import { EColor } from './src/app/ui/theme/foundations/colors.foundations'
import { fontFamily, fontSize, lineHeight } from './src/app/ui/theme/foundations/text.foundations'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: breakpoints,
    colors: EColor,
    extend: {
      boxShadow: {
        button: '0px 2px 4px 0px #0000000F' // Tu sombra personalizada
      }
    },
    fontFamily,
    fontSize,
    lineHeight
  },
  plugins: []
}
