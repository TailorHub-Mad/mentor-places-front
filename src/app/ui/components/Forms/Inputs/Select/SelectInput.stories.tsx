import SelectInput from '@components/Forms/Inputs/Select/SelectInput'
import type { Meta, StoryObj } from '@storybook/react'
import { SELECT_INPUT_MOCK } from '@components/Forms/Inputs/Select/mock'

export default {
  component: SelectInput,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
} as Meta

type Story = StoryObj<typeof SelectInput>

export const Default: Story = {
  args: {
    ...SELECT_INPUT_MOCK
  }
}
