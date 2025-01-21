import type { Meta, StoryObj } from '@storybook/react'
import LogInForm from './LogInForm'

const meta: Meta<typeof LogInForm> = {
  component: LogInForm,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof LogInForm>

export const Default: Story = {
  args: {}
}
