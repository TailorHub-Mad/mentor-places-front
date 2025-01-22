import { type FC } from 'react'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import FilterBlock from '@components/Filters/SideBar/components/FilterBlock'
import FilterSelectedControl from '@components/Filters/SideBar/components/FilterSelectedControl'

export enum EFilterType {
  CHECKBOX = 'checkbox',
  DATE = 'date',
  PRICE = 'price'
}

interface IFilterValue {
  value: string | string[] | IFilterItem[]
}

export interface IFilterItem extends IFilterValue {
  title: string
  id: string
  type: EFilterType
  count?: number
}

interface IFilterCategory {
  title: string
  id: string
  filters: IFilterItem[]
}

export interface IFilterSelection extends IFilterValue {
  id: string
  label?: string
}

export interface IFilterSideBarProps {
  filterSelected: IFilterSelection[]
  onChange: (value: IFilterSelection) => void
  onClear: () => void
  filters: IFilterCategory[]
  defaultOpen?: string
}

const FilterSideBar: FC<IFilterSideBarProps> = ({ filterSelected, filters, onChange, defaultOpen, onClear }) => {
  const { openItems, handleAccordion } = useAccordionItems(defaultOpen)

  return (
    <div className="filter-sidebar p-8 shadow rounded-[8px]">
      <div className="filter-sidebar__header">
        {filterSelected.length > 0 && <FilterSelectedControl filterSelected={filterSelected} onChange={onChange} onClear={onClear} />}
      </div>
      {filters.map((filter, index) => {
        const { filters, title, id } = filter
        return (
          <FilterBlock
            key={`filter-block-${id}-${index}`}
            id={id}
            index={index}
            filterSelected={filterSelected}
            openItems={openItems}
            onToggle={handleAccordion}
            onChange={onChange}
            filters={filters}
            title={title}
          />
        )
      })}
    </div>
  )
}

export default FilterSideBar
