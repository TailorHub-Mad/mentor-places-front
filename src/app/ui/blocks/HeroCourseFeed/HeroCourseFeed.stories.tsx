import type { Meta, StoryObj } from '@storybook/react'
import HeroCourseFeed from './HeroCourseFeed'
import { HERO_COURSE_FEED_MOCK } from './mock'

const meta: Meta = {
  component: HeroCourseFeed,
  args: HERO_COURSE_FEED_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof HeroCourseFeed>

export const Default: Story = {}
