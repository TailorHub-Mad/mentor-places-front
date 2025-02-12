'use client'

import { type FC, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import FilterBlock from '@components/Filters/SideBar/components/FilterBlock'
import FilterSelectedControl from '@components/Filters/SideBar/components/FilterSelectedControl'
import type { IFilterSelection, IFilterSideBarProps } from '@interfaces/filterSidebar.interfaces'
import { cx } from '@utils/cx'
import { parseCategoryFilters, parseDateFilter, parsePriceFilter, updateFilter } from '@components/Filters/SideBar/utils/handleFilters'

const FilterSideBar: FC<IFilterSideBarProps> = ({ filters, className }) => {
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
    <div className={cx('filter-sidebar px-4 py-8 md:px-8 md:shadow rounded-[8px]', className)}>
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
