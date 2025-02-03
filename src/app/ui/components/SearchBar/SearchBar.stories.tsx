import type { Meta, StoryFn } from '@storybook/react'
import SearchBar, { type ISearchBarProps, type ISearchQuery } from '@components/SearchBar/SearchBar'
import { useState } from 'react'
import { SEARCH_BAR_MOCK } from '@components/SearchBar/mock'

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
  const [valueSelected, setValueSelected] = useState(props.valuesSelected)

  const handleOnChange = (query: ISearchQuery) => {
    console.log('handleOnChange: ', { query })
    setValueSelected(query)
  }

  return <SearchBar {...props} valuesSelected={valueSelected} onChange={handleOnChange} />
}

export const Default = Template
Default.args = {}
