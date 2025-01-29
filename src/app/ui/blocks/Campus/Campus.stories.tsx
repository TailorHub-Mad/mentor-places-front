import type { Meta, StoryObj } from '@storybook/react'
import Campus from './Campus'
import { CONTACT_CARD_MOCK } from '@components/ContactCard/mock'

const meta: Meta<typeof Campus> = {
  component: Campus,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof Campus>

export const Default: Story = {
  args: {
    data: [
      { ...{ ...CONTACT_CARD_MOCK, name: 'Campus Valencia' }, image: '/images/blog-post-example-mentor.jpeg' },
      { ...{ ...CONTACT_CARD_MOCK, name: 'Campus Bilbao' }, image: '/images/university-example-mentor.jpeg' },
      { ...CONTACT_CARD_MOCK, image: '/images/blog-post-example-mentor.jpeg' }
    ]
  }
}
