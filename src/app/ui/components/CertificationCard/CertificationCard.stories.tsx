import type { Meta, StoryObj } from '@storybook/react'
import CertificationCard from '@components/CertificationCard/CertificationCard'
import { CERTIFICATION_CARD_MOCK } from '@components/CertificationCard/mock'

const meta: Meta = {
  component: CertificationCard,
  args: CERTIFICATION_CARD_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CertificationCard>

export const Default: Story = {}
