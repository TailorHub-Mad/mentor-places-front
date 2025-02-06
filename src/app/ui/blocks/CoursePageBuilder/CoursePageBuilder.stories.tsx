import type { Meta, StoryObj } from '@storybook/react'
import CoursePageBuilder from './CoursePageBuilder'

const meta: Meta<typeof CoursePageBuilder> = {
  component: CoursePageBuilder,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CoursePageBuilder>

export const Default: Story = {
  args: {}
}
