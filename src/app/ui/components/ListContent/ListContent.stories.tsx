import type { Meta, StoryObj } from '@storybook/react'
import ListContent from './ListContent'
import { LIST_CONTENT_MOCK_LONG, LIST_CONTENT_MOCK_SHORT } from './mocks'

const meta: Meta<typeof ListContent> = {
  component: ListContent,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ListContent>

export const ThreeItems: Story = {
  args: {
    list: LIST_CONTENT_MOCK_SHORT
  }
}

export const FiveItems: Story = {
  args: {
    list: LIST_CONTENT_MOCK_LONG
  }
}
