import type { Meta, StoryObj } from '@storybook/react'
import ColumnContent from './ColumnContent'
import { COLUMN_CONTENT_LIST_MOCK, COLUMN_CONTENT_LIST_MOCK_2, COLUMN_CONTENT_RICH_TEXT_MOCK } from './mock'

const meta: Meta = {
  component: ColumnContent,
  args: undefined,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ColumnContent>

export const Default: Story = {
  args: COLUMN_CONTENT_LIST_MOCK
}

export const RichContent: Story = {
  args: COLUMN_CONTENT_RICH_TEXT_MOCK
}

export const ListContent: Story = {
  args: COLUMN_CONTENT_LIST_MOCK_2
}
