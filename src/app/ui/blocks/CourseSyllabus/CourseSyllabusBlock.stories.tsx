import type { Meta, StoryObj } from '@storybook/react'
import CourseSyllabusBlock from './CourseSyllabusBlock'
import { COURSE_SYLLABUS_BLOCK_MOCK } from './mock'

const meta: Meta = {
  component: CourseSyllabusBlock,
  args: COURSE_SYLLABUS_BLOCK_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CourseSyllabusBlock>

export const Default: Story = {}
