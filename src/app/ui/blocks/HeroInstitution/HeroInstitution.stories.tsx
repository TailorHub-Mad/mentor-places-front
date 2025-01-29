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
    },
    blocks: [
      { id: '1', text: 'Acerca de' },
      { id: '2', text: 'Oferta educativa' },
      { id: '3', text: 'Becas y financiación' },
      { id: '4', text: 'Opiniones' }
    ]
  }
}
