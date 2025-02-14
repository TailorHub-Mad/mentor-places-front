import type { Meta, StoryObj } from '@storybook/react'
import SignUpModal from './SignUpModal'

const meta: Meta<typeof SignUpModal> = {
  component: SignUpModal,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof SignUpModal>

export const Default: Story = {
  args: {}
}
