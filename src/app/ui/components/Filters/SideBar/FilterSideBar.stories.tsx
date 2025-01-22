import type { Meta, StoryFn } from '@storybook/react'
import FilterSideBar, { type IFilterSelection, type IFilterSideBarProps } from '@components/Filters/SideBar/FilterSideBar'
import { FILTER_SIDEBAR_MOCK } from '@components/Filters/SideBar/mock'
import { useEffect, useState } from 'react'

const meta: Meta = {
  component: FilterSideBar,
  args: FILTER_SIDEBAR_MOCK,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

const Template: StoryFn<IFilterSideBarProps> = (args) => {
  const [selectedFilters, setSelectedFilters] = useState(args.filterSelected)

  useEffect(() => {
    setSelectedFilters(args.filterSelected)
  }, [args.filterSelected])

  const handleChange = (value: IFilterSelection) => {
    const selectedFiltersUpdate = updateFilter(value, selectedFilters)
    setSelectedFilters(selectedFiltersUpdate)
  }

  return <FilterSideBar {...args} onChange={handleChange} filterSelected={selectedFilters} />
}

export const Default = Template.bind({})
Default.args = {
  ...FILTER_SIDEBAR_MOCK
}

const updateFilter = (value: IFilterSelection, selectedFilters: IFilterSelection[]): IFilterSelection[] => {
  if (value.id.includes('price')) {
    return [...selectedFilters.filter((filter) => !filter.id.includes('price')), value]
  }

  if (selectedFilters.some((f) => f.id === value.id) && !value.id.includes('price')) {
    return selectedFilters.filter((filter) => filter.id !== value.id)
  }

  return [...selectedFilters, value]
}
