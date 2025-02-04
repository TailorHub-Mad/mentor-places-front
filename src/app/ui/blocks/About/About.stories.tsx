import type { Meta, StoryObj } from '@storybook/react'
import About from './About'
import { STATS_INFO_MOCK } from '@components/StatsInfo/mock'
import { RICH_TEXT_MOCK } from '@components/RichText/mock'

const meta: Meta<typeof About> = {
  component: About,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof About>

export const Default: Story = {
  args: {
    title: 'Acerca de',
    text: RICH_TEXT_MOCK,
    stats: STATS_INFO_MOCK.stats
  }
}
