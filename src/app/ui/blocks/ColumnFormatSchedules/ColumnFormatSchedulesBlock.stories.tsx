import type { Meta, StoryObj } from '@storybook/react'
import ColumnFormatSchedulesBlock from './ColumnFormatSchedulesBlock'
import { COLUMN_FORMAT_SCHEDULES_MOCK } from './mock'

const meta: Meta = {
  component: ColumnFormatSchedulesBlock,
  args: COLUMN_FORMAT_SCHEDULES_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ColumnFormatSchedulesBlock>

export const Default: Story = {}
