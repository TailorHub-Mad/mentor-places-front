import type { Meta, StoryFn } from '@storybook/react'
import { useEffect, useState } from 'react'
import FilterInputCheckbox, { type IFilterInputCheckboxProps } from './FilterInputCheckbox'
import { FILTER_INPUT_CHECKBOX_MOCKS } from '@components/Filters/FilterItems/FilterInputCheckbox/mocks'

export default {
  component: FilterInputCheckbox
} as Meta

// Template for creating stories
const Template: StoryFn<IFilterInputCheckboxProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked)

  useEffect(() => {
    setIsChecked(args.checked) // Sync with Storybook's args when they update
  }, [args.checked]) // Watch for changes in args

  const handleChange = () => {
    setIsChecked(!isChecked)
    args.onChange(args.id, !isChecked) // Notify Storybook about changes
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

// **Without Count Story**
export const WithoutCount = Template.bind({})
WithoutCount.args = {
  ...FILTER_INPUT_CHECKBOX_MOCKS,
  count: undefined
}
