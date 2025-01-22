import { type FC } from 'react'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import FilterBlock from '@components/Filters/SideBar/components/FilterBlock'
import FilterSelectedControl from '@components/Filters/SideBar/components/FilterSelectedControl'
import type { IFilterSideBarProps } from '@interfaces/filterSidebar.interfaces'

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
