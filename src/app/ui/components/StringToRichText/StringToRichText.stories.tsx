import type { Meta, StoryObj } from '@storybook/react'
import StringToRichText from './StringToRichText'
import { STRING_TO_RICH_TEXT_MOCK } from './mock'

const meta: Meta<typeof StringToRichText> = {
  component: StringToRichText,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof StringToRichText>

export const Default: Story = {
  args: {
    text: STRING_TO_RICH_TEXT_MOCK
  }
}
