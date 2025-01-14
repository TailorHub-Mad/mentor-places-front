import type { Meta, StoryObj } from '@storybook/react'
import MuralCard from './MuralCard'
import { EColor } from '@theme/foundations/colors.foundations'

const meta: Meta<typeof MuralCard> = {
  component: MuralCard,
  parameters: {
    locale: 'es'
  },
  args: {
    width: 322,
    height: 535
  }
}

export default meta

type Story = StoryObj<typeof MuralCard>

export const ImageCard: Story = {
  args: {
    type: 'image',
    src: '/images/blog-post-example-mentor.jpeg'
  }
}

export const TextCardOnlyTitle: Story = {
  args: {
    type: 'text',
    title: 'Asesoría educativa adaptada a tu vida',
    color: EColor.BLACK,
    backgroundColor: EColor.YELLOW
  }
}

export const TextCardWithParagraph: Story = {
  args: {
    type: 'text',
    title: 'Asesoría educativa adaptada a tu vida',
    color: EColor.WHITE,
    backgroundColor: EColor.BLUE,
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu posuere fringilla'
  }
}
