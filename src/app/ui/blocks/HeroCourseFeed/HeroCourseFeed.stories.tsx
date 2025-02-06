import type { Meta, StoryFn } from '@storybook/react'
import HeroCourseFeed, { type IHeroCourseFeedProps } from './HeroCourseFeed'
import { HERO_COURSE_FEED_MOCK } from './mock'
import { useState } from 'react'
import type { ESearchType, ISearchBarProps, ISearchQuery } from '@components/SearchBar/SearchBar'

const OPTION_LABEL_KEY = 'value'

const meta: Meta = {
  component: HeroCourseFeed,
  args: HERO_COURSE_FEED_MOCK,
  tags: ['autodocs'],
  parameters: {
    locale: 'es'
  }
}

export default meta

const Template: StoryFn<IHeroCourseFeedProps> = (props) => {
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
    <HeroCourseFeed
      {...props}
      options={filteredOptions}
      valuesSelected={selectedValues}
      onSearch={handleSearch}
      onChange={handleValueChange}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
