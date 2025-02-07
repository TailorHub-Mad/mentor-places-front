'use client'

import { type FC, useState } from 'react'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import FilterBlock from '@components/Filters/SideBar/components/FilterBlock'
import FilterSelectedControl from '@components/Filters/SideBar/components/FilterSelectedControl'
import type { IFilterSelection, IFilterSideBarProps } from '@interfaces/filterSidebar.interfaces'

const FilterSideBar: FC<IFilterSideBarProps> = ({ filters }) => {
  const defaultOpen = ''
  const { openItems, handleAccordion } = useAccordionItems(defaultOpen)

  const [filterSelected, setFilterSelected] = useState<IFilterSelection[]>([])

  const onClear = () => {
    setFilterSelected([])
  }

  const handleChange = (value: IFilterSelection) => {
    const selectedFiltersUpdate = updateFilter(value, filterSelected)
    setFilterSelected(selectedFiltersUpdate)
  }

  return (
    <div className="filter-sidebar px-4 py-8 md:px-8 shadow rounded-[8px]">
      <div className="filter-sidebar__header">
        {filterSelected && filterSelected.length > 0 && (
          <FilterSelectedControl filterSelected={filterSelected} onChange={handleChange} onClear={onClear} />
        )}
      </div>
      {filters.map((filter, index) => {
        const { filters, title, id } = filter
        if (!filters) return
        return (
          <FilterBlock
            key={`filter-block-${id}-${index}`}
            id={id}
            index={index}
            filterSelected={filterSelected}
            openItems={openItems}
            onToggle={handleAccordion}
            onChange={handleChange}
            filters={filters}
            title={title}
          />
        )
      })}
    </div>
  )
}

export default FilterSideBar

const updateFilter = (newFilter: IFilterSelection, currentFilters: IFilterSelection[] = []): IFilterSelection[] => {
  const filterByIdExcludes = (filters: IFilterSelection[], idPart: string) => filters.filter((filter) => !filter.id.includes(idPart))

  const isFilterPresent = currentFilters.some((filter) => filter.id === newFilter.id)

  const isNewFilterValue =
    Array.isArray(newFilter.value) &&
    newFilter.value.length > 1 &&
    Array.isArray(newFilter.value) &&
    new Set(newFilter.value.map((item) => (typeof item === 'string' ? item : ''))).size > 1

  if (['price', 'date'].some((type) => newFilter.id.includes(type))) {
    if (newFilter.id.includes('price') && Array.isArray(newFilter.value) && newFilter.value.length > 1) {
      return [...filterByIdExcludes(currentFilters, 'price'), newFilter]
    }
    if (isFilterPresent && !isNewFilterValue) {
      return currentFilters.filter((filter) => filter.id !== newFilter.id)
    }
    return [...filterByIdExcludes(currentFilters, 'date'), newFilter]
  }

  if (isFilterPresent) {
    return currentFilters.filter((filter) => filter.id !== newFilter.id)
  }

  return [...currentFilters, newFilter]
}
