import type { Meta, StoryObj } from '@storybook/react'
import CourseFeaturedDetails from './CourseFeaturedDetails'

const meta: Meta<typeof CourseFeaturedDetails> = {
  component: CourseFeaturedDetails,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof CourseFeaturedDetails>

export const Default: Story = {
  args: {
    duration: '9 meses',
    format: 'Presencial',
    language: 'Español',
    campus: 'Madrid',
    startDate: '25 agosto'
  }
}
