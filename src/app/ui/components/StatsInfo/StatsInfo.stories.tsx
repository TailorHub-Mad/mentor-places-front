import type { Meta, StoryObj } from '@storybook/react'
import StatsInfo from '@components/StatsInfo/StatsInfo'
import { STATS_INFO_MOCK } from '@components/StatsInfo/mock'

const meta: Meta = {
  component: StatsInfo,
  args: STATS_INFO_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof StatsInfo>

export const Default: Story = {}
