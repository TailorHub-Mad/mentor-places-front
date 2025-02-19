import type { Meta, StoryFn } from '@storybook/react'
import CoursesFeedBlock, { type ICoursesFeedBlockProps } from './CoursesFeedBlock'
import { COURSES_FEED_BLOCK_MOCK } from './mock'

const meta: Meta = {
  component: CoursesFeedBlock,
  args: COURSES_FEED_BLOCK_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

const Template: StoryFn<ICoursesFeedBlockProps> = (args) => {
  return <CoursesFeedBlock {...args} />
}

export const Default = Template.bind({})
Default.args = {}
