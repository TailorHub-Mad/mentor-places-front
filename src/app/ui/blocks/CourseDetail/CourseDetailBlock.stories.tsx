import type { Meta, StoryObj } from '@storybook/react'
import CourseDetailBlock from './CourseDetailBlock'
import { COURSE_DETAIL_BLOCK_MOCK } from './mock'

const meta: Meta = {
  component: CourseDetailBlock,
  args: COURSE_DETAIL_BLOCK_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CourseDetailBlock>

export const Default: Story = {}
