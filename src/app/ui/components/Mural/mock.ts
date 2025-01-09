import type { TMuralCard } from '@components/MuralCard/MuralCard'
import { EColor } from '@theme/foundations/colors.foundations'

export const MOCK_MURAL: TMuralCard[] = [
  {
    type: 'text',
    title: 'Asesoría educativa adaptada a tu vida',
    color: EColor.WHITE,
    backgroundColor: EColor.BLUE
  },
  {
    type: 'image',
    src: '/images/blog-post-example-mentor.jpeg'
  },
  {
    type: 'text',
    title: 'Todo lo que necesitas para tomar una buena decisión',
    color: EColor.BLACK,
    backgroundColor: EColor.YELLOW
  },
  {
    type: 'image',
    src: '/images/blog-post-example-mentor.jpeg'
  },
  {
    type: 'image',
    src: '/images/blog-post-example-mentor.jpeg'
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
