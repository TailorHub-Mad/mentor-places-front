import type { Meta, StoryObj } from '@storybook/react'
import CourseSyllabus from '@components/CourseSyllabus/CourseSyllabus'
import { COURSE_SYLLABUS_MOCK } from '@components/CourseSyllabus/mock'

const meta: Meta = {
  component: CourseSyllabus,
  args: COURSE_SYLLABUS_MOCK,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CourseSyllabus>

export const Default: Story = {}
