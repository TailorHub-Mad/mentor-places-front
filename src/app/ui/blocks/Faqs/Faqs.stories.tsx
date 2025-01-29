import type { Meta, StoryObj } from '@storybook/react'
import Faqs from './Faqs'
import { FAQ_ACCORDION_MOCK } from '@components/FaqAccordion/mock'

const meta: Meta<typeof Faqs> = {
  component: Faqs,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof Faqs>

export const Default: Story = {
  args: FAQ_ACCORDION_MOCK
}
