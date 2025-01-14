import type { Meta, StoryObj } from '@storybook/react'
import Mural from './Mural'
import { MOCK_MURAL } from './mock'

const meta: Meta<typeof Mural> = {
  component: Mural,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof Mural>

export const Default: Story = {
  args: {
    data: MOCK_MURAL
  }
}
