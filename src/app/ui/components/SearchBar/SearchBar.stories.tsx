import type { Meta, StoryFn } from '@storybook/react'
import SearchBar, { type ESearchType, type ISearchBarProps, type ISearchQuery } from '@components/SearchBar/SearchBar'
import { useState } from 'react'
import { SEARCH_BAR_MOCK } from '@components/SearchBar/mock'

const OPTION_LABEL_KEY = 'value'

const meta: Meta = {
  component: SearchBar,
  args: SEARCH_BAR_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}
export default meta

const Template: StoryFn<ISearchBarProps> = (props) => {
  const [selectedValues, setSelectedValues] = useState(props.valuesSelected)
  const [filteredOptions, setFilteredOptions] = useState(props.options)

  const handleValueChange = (query: ISearchQuery) => {
    setSelectedValues(query)
  }

  const filterOptions = (value: string, type: ESearchType, options: ISearchBarProps['options']) => {
    if (!value) return options
    return {
      ...options,
      [type]: options[type].filter((option) => option[OPTION_LABEL_KEY].toLowerCase().includes(value.toLowerCase()))
    }
  }

  const handleSearch = (value: string, type: ESearchType) => {
    const updatedOptions = filterOptions(value, type, props.options)
    setFilteredOptions(updatedOptions)
  }

  return (
    <SearchBar {...props} onSearch={handleSearch} options={filteredOptions} valuesSelected={selectedValues} onChange={handleValueChange} />
  )
}

export const Default = Template
Default.args = {}
