import type { Meta, StoryObj } from '@storybook/react'
import FaqAccordion from '@components/FaqAccordion/FaqAccordion'
import { FAQ_ACCORDION_MOCK } from '@components/FaqAccordion/mock'

const meta: Meta = {
  component: FaqAccordion,
  args: FAQ_ACCORDION_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof FaqAccordion>

export const Default: Story = {}
