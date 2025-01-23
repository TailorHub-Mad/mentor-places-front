import type { Meta, StoryFn } from '@storybook/react'
import FilterSideBar from '@components/Filters/SideBar/FilterSideBar'
import { FILTER_SIDEBAR_MOCK } from '@components/Filters/SideBar/mock'
import { useEffect, useState } from 'react'
import type { IFilterSelection, IFilterSideBarProps } from '@interfaces/filterSidebar.interfaces'

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

  const handleOnClear = () => {
    console.log('handleOnClear')
    setSelectedFilters([])
  }

  const handleChange = (value: IFilterSelection) => {
    const selectedFiltersUpdate = updateFilter(value, selectedFilters)
    setSelectedFilters(selectedFiltersUpdate)

    console.log({ selectedFiltersUpdate })
  }

  return <FilterSideBar {...args} onChange={handleChange} filterSelected={selectedFilters} onClear={handleOnClear} />
}

export const Default = Template.bind({})
Default.args = {
  ...FILTER_SIDEBAR_MOCK
}

const updateFilter = (newFilter: IFilterSelection, currentFilters: IFilterSelection[]): IFilterSelection[] => {
  const filterByIdIncludes = (filters: IFilterSelection[], idPart: string) => filters.filter((filter) => !filter.id.includes(idPart))

  const isFilterPresent = currentFilters.some((filter) => filter.id === newFilter.id)

  if (newFilter.id.includes('price') && newFilter.value?.length > 1) {
    return [...filterByIdIncludes(currentFilters, 'price'), newFilter]
  }

  if (newFilter.id.includes('price') || newFilter.id.includes('date')) {
    if (isFilterPresent && !newFilter.value) {
      return currentFilters.filter((filter) => filter.id !== newFilter.id)
    }
  }

  if (newFilter.id.includes('date')) {
    return [...filterByIdIncludes(currentFilters, 'date'), newFilter]
  }

  if (isFilterPresent) {
    return currentFilters.filter((filter) => filter.id !== newFilter.id)
  }

  return [...currentFilters, newFilter]
}
