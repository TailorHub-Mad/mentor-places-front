import type { Meta, StoryObj } from '@storybook/react'
import CampusSlider from './CampusSlider'
import { CONTACT_CARD_MOCK } from '@components/ContactCard/mock'

const meta: Meta<typeof CampusSlider> = {
  component: CampusSlider,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CampusSlider>

export const Default: Story = {
  args: {
    data: [
      { ...{ ...CONTACT_CARD_MOCK, name: 'Campus Valencia' }, image: '/images/blog-post-example-mentor.jpeg' },
      { ...{ ...CONTACT_CARD_MOCK, name: 'Campus Bilbao' }, image: '/images/university-example-mentor.jpeg' },
      { ...CONTACT_CARD_MOCK, image: '/images/blog-post-example-mentor.jpeg' }
    ]
  }
}
