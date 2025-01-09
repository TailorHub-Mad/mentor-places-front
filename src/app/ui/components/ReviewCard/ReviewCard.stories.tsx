import ReviewCard from '@components/ReviewCard/ReviewCard'
import type { Meta, StoryObj } from '@storybook/react'

const REVIEW_CARD_MOCK = {
  review:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien eget diam efficitur efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  date: '2021-01-01',
  rating: 4,
  studiedAt: '2021'
}

const meta: Meta<typeof ReviewCard> = {
  component: ReviewCard,
  args: REVIEW_CARD_MOCK
}

export default meta

type Story = StoryObj<typeof ReviewCard>

export const Default: Story = {}
