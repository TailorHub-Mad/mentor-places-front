import ReviewRatingOverview from '@components/ReviewRatingOverview/ReviewRatingOverview'
import type { Meta, StoryObj } from '@storybook/react'
import { REVIEW_RATING_OVERVIEW_MOCK } from '@components/ReviewRatingOverview/mock'

const meta: Meta<typeof ReviewRatingOverview> = {
  component: ReviewRatingOverview,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ReviewRatingOverview>

export const Default: Story = {
  args: REVIEW_RATING_OVERVIEW_MOCK
}
