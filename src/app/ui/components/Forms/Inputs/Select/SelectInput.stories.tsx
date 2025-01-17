import SelectInput from '@components/Forms/Inputs/Select/SelectInput'
import type { Meta, StoryObj } from '@storybook/react'
import { LONG_OPTIONS_LIST_MOCK, SELECT_INPUT_MOCK } from '@components/Forms/Inputs/Select/mock'

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

export const Disabled: Story = {
  args: {
    ...SELECT_INPUT_MOCK,
    disabled: true
  }
}

export const LongOptionsList: Story = {
  args: {
    ...SELECT_INPUT_MOCK,
    ...LONG_OPTIONS_LIST_MOCK
  }
}
