import type { Meta, StoryObj } from '@storybook/react'
import ListContent from './ListContent'

const meta: Meta<typeof ListContent> = {
  component: ListContent,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ListContent>

export const Default: Story = {
  args: {}
}
