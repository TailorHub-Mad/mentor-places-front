/** @type {import('tailwindcss').Config} */

import { breakpoints } from './src/app/ui/theme/foundations/breakpoints.theme'
import { EColor } from './src/app/ui/theme/foundations/colors.foundations'
import { fontFamily, fontSize, lineHeight } from './src/app/ui/theme/foundations/text.foundations'
const plugin = require('tailwindcss/plugin')

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
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.page': {
          'max-width': '1440px',
          'padding-inline': '1.5rem',
          '@screen lg': {
            'padding-inline': '2.5rem'
          }
        }
      })
    })
  ]
}
