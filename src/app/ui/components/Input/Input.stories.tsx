import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Text: Story = {
  args: {}
}

export const Password: Story = {
  args: {
    type: 'password'
  }
}

export const WithError: Story = {
  args: {
    error: 'Required'
  }
}
