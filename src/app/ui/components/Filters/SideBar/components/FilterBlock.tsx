import type { FC } from 'react'
import type { IFilterItem, IFilterSelection } from '@components/Filters/SideBar/FilterSideBar'
import FilterItem from '@components/Filters/SideBar/components/FilterItem'
import AccordionBlock from '@components/Accordion/components/AccordionBlock'
import InputCheckbox from '@components/Form/Inputs/Checkbox/InputCheckbox'

interface IFilterBlockProps {
  title: string
  index: number | string
  onToggle: (index: string) => void
  openItems: Set<string>
  filters: IFilterItem[]
  filterSelected: IFilterSelection[]
  onChange: (value: IFilterSelection) => void
  id: string
}

// Type guard to check if a value is an array of IFilterItem
const isIFilterItemArray = (value: unknown): value is IFilterItem[] => {
  return Array.isArray(value) && value.every((item) => typeof item === 'object' && 'id' in item && 'type' in item)
}

const FilterBlock: FC<IFilterBlockProps> = ({ title, filters, openItems, onToggle, index, filterSelected, onChange, id }) => {
  const renderFilters = (filters: IFilterItem[], parentIndex: string) => {
    return filters.map((filter, childIndex) => {
      const currentIndex = `${parentIndex}-${childIndex}`
      const isNested = isIFilterItemArray(filter.value) // Use type guard here
      const isFilterSelected = filterSelected.some((f) => f.id === filter.id)

      if (!isNested) {
        // Render a single filter item
        return (
          <FilterItem
            key={filter.id}
            type={filter.type}
            id={filter.id}
            title={filter.title}
            selected={isFilterSelected}
            filterSelected={filterSelected}
            onChange={onChange}
            count={filter.count}
          />
        )
      }

      // Render a nested filter block
      return (
        <AccordionBlock
          key={filter.id}
          title={<InputCheckbox id={filter.id} label={filter.title} checked={isFilterSelected} onChange={onChange} count={filter.count} />}
          index={currentIndex}
          openItems={openItems}
          onToggle={onToggle}>
          {renderFilters(filter.value as IFilterItem[], currentIndex)} {/* Recursion */}
        </AccordionBlock>
      )
    })
  }

  return (
    <AccordionBlock key={id} title={title} index={`${index}`} onToggle={onToggle} openItems={openItems}>
      {renderFilters(filters, `${index}`)}
    </AccordionBlock>
  )
}

export default FilterBlock
