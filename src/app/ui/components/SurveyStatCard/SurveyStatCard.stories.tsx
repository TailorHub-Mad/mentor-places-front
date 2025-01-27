import type { Meta, StoryObj } from '@storybook/react'
import SurveyStatCard from '@components/SurveyStatCard/SurveyStatCard'
import { SURVEY_STAT_CARD_MOCK } from '@components/SurveyStatCard/mock'

const meta: Meta = {
  component: SurveyStatCard,
  args: SURVEY_STAT_CARD_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof SurveyStatCard>

export const Default: Story = {}
