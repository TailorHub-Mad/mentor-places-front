import type { Meta, StoryObj } from '@storybook/react'
import RichText from './RichText'
import { RICH_TEXT_MOCK } from './mock'

const meta: Meta<typeof RichText> = {
  component: RichText,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof RichText>

export const Default: Story = {
  args: {
    content: RICH_TEXT_MOCK,
    maxLines: 7,
    width: '30%'
  }
}
