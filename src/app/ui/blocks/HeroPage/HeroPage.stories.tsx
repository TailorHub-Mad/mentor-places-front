import type { Meta, StoryObj } from '@storybook/react'
import HeroPage from './HeroPage'

const meta: Meta<typeof HeroPage> = {
  component: HeroPage,
  parameters: {
    locale: 'es'
  },
  args: {
    title: 'Asesoría educativa adaptada a tu vida',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu posuere fringilla, donec in netus platea felis bibendum litora diam vulputate, ornare montes',
    cta: 'Asesoramiento gratuito',
    action: 'advice',
    image: '/images/blog-post-example-mentor.jpeg'
  }
}

export default meta

type Story = StoryObj<typeof HeroPage>

export const Light: Story = {
  args: {
    theme: 'light'
  }
}

export const Dark: Story = {
  args: {
    theme: 'dark'
  }
}
