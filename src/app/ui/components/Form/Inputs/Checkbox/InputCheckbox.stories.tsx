import type { Meta, StoryFn } from '@storybook/react'
import { useEffect, useState } from 'react'
import InputCheckbox, { type IInputCheckboxProps } from './InputCheckbox'
import { FILTER_INPUT_CHECKBOX_MOCKS } from '@components/Form/Inputs/Checkbox/mocks'

export default {
  component: InputCheckbox
} as Meta

const Template: StoryFn<IInputCheckboxProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked)

  useEffect(() => {
    setIsChecked(args.checked)
  }, [args.checked])

  const handleChange = () => {
    setIsChecked(!isChecked)
    args.onChange(args.id, !isChecked)
  }

  return <InputCheckbox {...args} checked={isChecked} onChange={handleChange} />
}

export const Default = Template.bind({})
Default.args = {
  ...FILTER_INPUT_CHECKBOX_MOCKS
}

export const Checked = Template.bind({})
Checked.args = {
  ...FILTER_INPUT_CHECKBOX_MOCKS,
  checked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...FILTER_INPUT_CHECKBOX_MOCKS,
  disabled: true
}

export const WithoutCount = Template.bind({})
WithoutCount.args = {
  ...FILTER_INPUT_CHECKBOX_MOCKS,
  count: undefined
}
