'use client'

import { type FC, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import FilterBlock from '@components/Filters/SideBar/components/FilterBlock'
import FilterSelectedControl from '@components/Filters/SideBar/components/FilterSelectedControl'
import type { IFilterCategory, IFilterSelection, IFilterSideBarProps } from '@interfaces/filterSidebar.interfaces'

const FilterSideBar: FC<IFilterSideBarProps> = ({ filters }) => {
  const defaultOpen = ''
  const { openItems, handleAccordion } = useAccordionItems(defaultOpen)
  const [filterSelected, setFilterSelected] = useState<IFilterSelection[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()

  const onClear = () => setFilterSelected([])

  const handleChange = (value: IFilterSelection) => {
    setFilterSelected((prev) => updateFilter(value, prev))
  }

  // Initialize `filterSelected` from URLSearchParams only on the first render
  useEffect(() => {
    const urlParams = searchParams
    if (!urlParams) return

    const parsedFilters: IFilterSelection[] = [
      ...parseDateFilter(urlParams),
      ...parsePriceFilter(urlParams),
      ...parseCategoryFilters(urlParams, filters)
    ]

    setFilterSelected(parsedFilters)
  }, [searchParams])

  // Update `URLSearchParams` whenever `filterSelected` changes
  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams.toString())
    const categories: string[] = []

    filterSelected.forEach((filter) => {
      if (filter.id === 'date' || filter.id === 'price') {
        urlParams.set(filter.id, Array.isArray(filter.value) ? filter.value.join(',') : String(filter.value))
      } else {
        // Only include `id` for category filters
        categories.push(filter.id)
      }
    })

    if (categories.length > 0) {
      urlParams.set('cat', categories.join('|'))
    } else {
      urlParams.delete('cat')
    }

    router.replace(`?${urlParams.toString()}`)
  }, [filterSelected, searchParams, router])

  return (
    <div className="filter-sidebar px-4 py-8 md:px-8 shadow rounded-[8px]">
      <div className="filter-sidebar__header">
        {filterSelected.length > 0 && <FilterSelectedControl filterSelected={filterSelected} onChange={handleChange} onClear={onClear} />}
      </div>
      {filters.map((filter, index) => {
        const { filters, title, id } = filter
        if (!filters) return null
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

const parseDateFilter = (params: URLSearchParams): IFilterSelection[] =>
  params.has('date')
    ? [
        {
          id: 'date',
          value: params.get('date')!.split(',')
        }
      ]
    : []

const parsePriceFilter = (params: URLSearchParams): IFilterSelection[] =>
  params.has('price')
    ? [
        {
          id: 'price',
          value: params.get('price')!.split(',')
        }
      ]
    : []

const parseCategoryFilters = (params: URLSearchParams, filters: IFilterCategory[]): IFilterSelection[] => {
  if (!params.has('cat')) return []
  return params
    .get('cat')!
    .split('|')
    .map((catFilter) => {
      const id = catFilter.split(':')[0]

      const nestedFilter = filters
        .flatMap((filter) => filter.filters || []) // Flatten all nested `filters` arrays
        .find((f) => f.id === id) // Find the one with a matching id

      return { id, value: nestedFilter?.title || id }
    })
}

const updateFilter = (newFilter: IFilterSelection, currentFilters: IFilterSelection[] = []): IFilterSelection[] => {
  const FILTER_TYPES = ['date', 'price']
  const excludeFilters = (filters: IFilterSelection[], idPart: string) => filters.filter((filter) => !filter.id.includes(idPart))

  if (FILTER_TYPES.some((type) => newFilter.id.includes(type))) {
    return [...excludeFilters(currentFilters, newFilter.id), newFilter]
  }

  return currentFilters.some((filter) => filter.id === newFilter.id)
    ? currentFilters.filter((filter) => filter.id !== newFilter.id)
    : [...currentFilters, newFilter]
}
