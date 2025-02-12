import type { Meta, StoryObj } from '@storybook/react'
import InfoLegalBlock from './InfoLegalBlock'
import { INFO_LEGAL_MOCK } from './mock'

const meta: Meta = {
  component: InfoLegalBlock,
  args: INFO_LEGAL_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof InfoLegalBlock>

export const Default: Story = {}
