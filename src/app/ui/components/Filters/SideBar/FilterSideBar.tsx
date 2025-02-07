'use client'

import { type FC, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import FilterBlock from '@components/Filters/SideBar/components/FilterBlock'
import FilterSelectedControl from '@components/Filters/SideBar/components/FilterSelectedControl'
import type { IFilterSelection, IFilterSideBarProps } from '@interfaces/filterSidebar.interfaces'

const FilterSideBar: FC<IFilterSideBarProps> = ({ filters }) => {
  const defaultOpen = ''
  const { openItems, handleAccordion } = useAccordionItems(defaultOpen)

  const [filterSelected, setFilterSelected] = useState<IFilterSelection[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()

  const onClear = () => {
    setFilterSelected([])
  }

  const handleChange = (value: IFilterSelection) => {
    const selectedFiltersUpdate = updateFilter(value, filterSelected)
    setFilterSelected(selectedFiltersUpdate)
  }

  // Initialize `filterSelected` from URLSearchParams only on the first render
  useEffect(() => {
    const params = searchParams
    if (!params) return

    const filtersFromParams: IFilterSelection[] = []

    // Parse `date` filter
    if (params.has('date')) {
      filtersFromParams.push({
        id: 'date',
        value: params.get('date')!.split(',') // Split value into array (if applicable)
      })
    }

    // Parse `price` filter
    if (params.has('price')) {
      filtersFromParams.push({
        id: 'price',
        value: params.get('price')!.split(',') // Split value into array (if applicable)
      })
    }

    // Parse `cat` filters
    if (params.has('cat')) {
      const catFilters = params.get('cat')!.split('|') // Split multiple categories by `|`
      catFilters.forEach((catFilter) => {
        const [id, value] = catFilter.split(':') // Split each category by `:`
        if (id && value) {
          filtersFromParams.push({
            id,
            value: value.includes(',') ? value.split(',') : value // Split multi-valued cats
          })
        }
      })
    }

    // Set `filterSelected` based on URL parameters (run only during first render)
    setFilterSelected(filtersFromParams)
  }, []) // Empty dependency array ensures it only runs on the first render

  // Update `URLSearchParams` whenever `filterSelected` changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString()) // Initialize with existing params

    const categories: string[] = []

    filterSelected.forEach((filter) => {
      if (filter.id.includes('date')) {
        params.set('date', Array.isArray(filter.value) ? filter.value.join(',') : String(filter.value))
      } else if (filter.id.includes('price')) {
        params.set('price', Array.isArray(filter.value) ? filter.value.join(',') : String(filter.value))
      } else {
        // For other filter types, add them under `cat` as concatenated values
        categories.push(`${filter.id}:${Array.isArray(filter.value) ? filter.value.join(',') : String(filter.value)}`)
      }
    })

    // Add concatenated `cat` parameter if there are categories
    if (categories.length > 0) {
      params.set('cat', categories.join('|'))
    } else {
      params.delete('cat') // Ensure unused params aren't included
    }

    // Persist the updated parameters
    router.replace(`?${params.toString()}`)
  }, [filterSelected, searchParams, router]) // Ensure dependencies include `searchParams`

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
