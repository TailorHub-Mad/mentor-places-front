import type { Meta, StoryObj } from '@storybook/react'
import KeyPoints from './KeyPoints'

const meta: Meta<typeof KeyPoints> = {
  component: KeyPoints,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof KeyPoints>

export const Default: Story = {
  args: {
    title: 'Razones para estudiar aquí',
    list: [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque quisqu'
    ]
  }
}
