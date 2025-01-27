import type { Meta, StoryObj } from '@storybook/react'
import ContactCard from '@components/ContactCard/ContactCard'
import { CONTACT_CARD_MOCK } from '@components/ContactCard/mock'

const meta: Meta = {
  component: ContactCard,
  args: CONTACT_CARD_MOCK,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ContactCard>

export const Default: Story = {}
