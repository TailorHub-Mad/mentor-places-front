import ReviewCard from '@components/ReviewCard/ReviewCard'
import type { Meta, StoryObj } from '@storybook/react'

const REVIEW_CARD_MOCK = {
  review:
    'El máster de marketing digital cubrió mis expectativas. Tuve la oportunidad de conocer estudiantes y profesores brillantes y necesitados',
  date: '2024-01-01',
  rating: 4,
  enrolledTo: 'Estudiante máster'
}

const meta: Meta<typeof ReviewCard> = {
  component: ReviewCard,
  args: REVIEW_CARD_MOCK
}

export default meta

type Story = StoryObj<typeof ReviewCard>

export const Default: Story = {}
