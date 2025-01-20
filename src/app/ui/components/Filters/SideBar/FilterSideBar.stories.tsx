import type { Meta, StoryFn } from '@storybook/react'
import FilterSideBar, { type IFilterSideBarProps } from '@components/Filters/SideBar/FilterSideBar'
import { FILTER_SIDEBAR_MOCK } from '@components/Filters/SideBar/mock'
import { useEffect, useState } from 'react'

const meta: Meta = {
  component: FilterSideBar,
  args: FILTER_SIDEBAR_MOCK,
  tags: ['autodocs']
}

export default meta

const Template: StoryFn<IFilterSideBarProps> = (args) => {
  const [selectedFilters, setSelectedFilters] = useState(args.filterSelected)

  useEffect(() => {
    setSelectedFilters(args.filterSelected)
  }, [args.filterSelected])

  const handleChange = (value: string) => {
    const selectedFiltersUpdate = updateFilter(value, selectedFilters)

    setSelectedFilters(selectedFiltersUpdate)
  }

  return <FilterSideBar {...args} onChange={handleChange} filterSelected={selectedFilters} />
}

export const Default = Template.bind({})
Default.args = {
  ...FILTER_SIDEBAR_MOCK
}

const updateFilter = (value: string, selectedFilters: string[]): string[] => {
  if (selectedFilters.includes(value)) {
    return selectedFilters.filter((filter) => filter !== value)
  }

  return [...selectedFilters, value]
}
