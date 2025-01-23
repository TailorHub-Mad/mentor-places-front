import InputSelect, { type ISelectInputProps } from '@components/Form/Inputs/Select/InputSelect'
import type { Meta, StoryFn } from '@storybook/react'
import { LONG_OPTIONS_LIST_MOCK, SELECT_INPUT_MOCK } from '@components/Form/Inputs/Select/mock'
import { useState } from 'react'
import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'

export default {
  component: InputSelect,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
} as Meta

const Template: StoryFn<ISelectInputProps> = (args) => {
  const [valueSelected, setValueSelected] = useState(args.valueSelected || '')

  const handleOnChange = (value: IFilterSelection) => {
    if (value.id === valueSelected) return setValueSelected('')

    setValueSelected(value.id)
  }

  return <InputSelect {...args} valueSelected={valueSelected} onChange={handleOnChange} />
}

export const Default = Template.bind({})
Default.args = {
  ...SELECT_INPUT_MOCK
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...SELECT_INPUT_MOCK,
  disabled: true
}

export const LongOptionsList = Template.bind({})
LongOptionsList.args = {
  ...SELECT_INPUT_MOCK,
  ...LONG_OPTIONS_LIST_MOCK
}
export const ValueSelected = Template.bind({})
ValueSelected.args = {
  ...SELECT_INPUT_MOCK,
  valueSelected: SELECT_INPUT_MOCK.options[0].value
}
