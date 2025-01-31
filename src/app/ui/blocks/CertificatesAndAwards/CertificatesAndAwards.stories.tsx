import type { Meta, StoryObj } from '@storybook/react'
import CertificatesAndAwards from './CertificatesAndAwards'
import { CERTIFICATION_CARD_MOCK } from '@components/CertificationCard/mock'

const meta: Meta<typeof CertificatesAndAwards> = {
  component: CertificatesAndAwards,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CertificatesAndAwards>

export const Default: Story = {
  args: {
    title: 'Certificados y reconocimientos',
    cards: [CERTIFICATION_CARD_MOCK, CERTIFICATION_CARD_MOCK, CERTIFICATION_CARD_MOCK]
  }
}
