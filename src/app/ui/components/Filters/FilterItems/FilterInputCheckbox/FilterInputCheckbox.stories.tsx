import type { Meta, StoryFn } from '@storybook/react'
import { useEffect, useState } from 'react'
import FilterInputCheckbox, { type IFilterInputCheckboxProps } from './FilterInputCheckbox'
import { FILTER_INPUT_CHECKBOX_MOCKS } from '@components/Filters/FilterItems/FilterInputCheckbox/mocks'

export default {
  component: FilterInputCheckbox
} as Meta

const Template: StoryFn<IFilterInputCheckboxProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked)

  useEffect(() => {
    setIsChecked(args.checked)
  }, [args.checked])

  const handleChange = () => {
    setIsChecked(!isChecked)
    args.onChange(args.id, !isChecked)
  }

  return <FilterInputCheckbox {...args} checked={isChecked} onChange={handleChange} />
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
