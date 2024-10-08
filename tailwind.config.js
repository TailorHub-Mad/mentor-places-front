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
    extend: {},
    fontFamily,
    fontSize,
    lineHeight
  },
  plugins: []
}
