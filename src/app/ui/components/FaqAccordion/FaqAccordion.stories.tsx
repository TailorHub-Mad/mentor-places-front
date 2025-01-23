import type { Meta, StoryObj } from '@storybook/react'
import FaqAccordion from '@components/FaqAccordion/FaqAccordion'

const meta: Meta = {
  component: FaqAccordion,
  args: undefined,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof FaqAccordion>

export const Default: Story = {}
