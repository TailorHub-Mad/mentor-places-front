import type { TMuralCard } from '@components/MuralCard/MuralCard'
import { EColor } from '@theme/foundations/colors.foundations'

export const MOCK_MURAL: TMuralCard[] = [
  {
    type: 'text',
    title: 'Asesoría educativa adaptada a tu vida',
    color: EColor.WHITE,
    backgroundColor: EColor.BLUE,
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu posuere fringilla'
  },
  {
    type: 'image',
    src: '/images/mural-1.jpg'
  },
  {
    type: 'text',
    title: 'Todo lo que necesitas para tomar una buena decisión',
    color: EColor.BLACK,
    backgroundColor: EColor.YELLOW
  },
  {
    type: 'image',
    src: '/images/mural-2.jpg'
  },
  {
    type: 'image',
    src: '/images/mural-3.jpg'
  },
  {
    type: 'text',
    title: 'Lorem ipsum',
    color: EColor.BLACK,
    backgroundColor: EColor.BLUE_LIGHT_60
  },
  {
    type: 'text',
    title: 'Lorem ipsum',
    color: EColor.WHITE,
    backgroundColor: EColor.BLUE_LIGHT
  }
]
