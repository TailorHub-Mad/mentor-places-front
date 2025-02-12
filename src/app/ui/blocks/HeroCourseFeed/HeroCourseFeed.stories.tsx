import type { Meta, StoryFn } from '@storybook/react'
import HeroCourseFeed, { type IHeroCourseFeedProps } from './HeroCourseFeed'
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

const Template: StoryFn<IHeroCourseFeedProps> = (props) => {
  return <HeroCourseFeed {...props} />
}

export const Default = Template.bind({})
Default.args = {}
