import SelectInput, { type ISelectInputProps } from '@components/Forms/Inputs/Select/SelectInput'
import type { Meta, StoryFn } from '@storybook/react'
import { SELECT_INPUT_MOCK } from '@components/Forms/Inputs/Select/mock'

export default {
  component: SelectInput
} as Meta

const Template: StoryFn<ISelectInputProps> = (args) => {
  const handleChange = (value: string) => {
    args.onChange(value)
  }

  return <SelectInput {...args} onChange={handleChange} />
}

export const Default = Template.bind({})
Default.args = {
  ...SELECT_INPUT_MOCK
}
