import type { Meta, StoryObj } from '@storybook/react'
import HeroInstitution from './HeroInstitution'

const meta: Meta<typeof HeroInstitution> = {
  component: HeroInstitution,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof HeroInstitution>

export const Default: Story = {
  args: {
    title: 'Universidad Francisco de Vitoria',
    logo: '/images/UAX-university-mentor.png',
    image: '/images/blog-post-example-mentor.jpeg',
    opinions: {
      average: 4.5,
      total: 44
    }
  }
}
