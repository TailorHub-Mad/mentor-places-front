import type { Meta, StoryObj } from '@storybook/react'
import ColumnFormatSchedulesBlock from './ColumnFormatSchedulesBlock'
import { COLUMN_FORMAT_SCHEDULES_TITLE_CARD_MOCK, COLUMN_FORMAT_SCHEDULES_TITLE_CARD_WITH_ICON_MOCK } from './mock'

const meta: Meta = {
  component: ColumnFormatSchedulesBlock,
  args: undefined,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof ColumnFormatSchedulesBlock>

export const CardsWithTitles: Story = {
  args: COLUMN_FORMAT_SCHEDULES_TITLE_CARD_MOCK
}

export const CardsWithIcons: Story = {
  args: COLUMN_FORMAT_SCHEDULES_TITLE_CARD_WITH_ICON_MOCK
}
