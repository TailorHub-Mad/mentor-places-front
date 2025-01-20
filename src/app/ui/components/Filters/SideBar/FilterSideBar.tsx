import { type FC } from 'react'
import AccordionBlock from '@components/Accordion/components/AccordionBlock'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import InputCheckbox from '@components/Form/Inputs/Checkbox/InputCheckbox'
import FilterItem from '@components/Filters/SideBar/components/FilterItem'

export enum EFilterType {
  CHECKBOX = 'checkbox',
  DATE = 'date',
  PRICE = 'price'
}
export interface IFilterItem {
  title: string
  id: string
  type: EFilterType
  value: string | IFilterItem[]
  count: number
}

interface IFilterCategory {
  title: string
  id: string
  filters: IFilterItem[]
}

export interface IFilterSideBarProps {
  filterSelected: string[]
  onChange: (value: string) => void
  filters: IFilterCategory[]
  defaultOpen?: string
}

const FilterSideBar: FC<IFilterSideBarProps> = ({ filterSelected, filters, onChange, defaultOpen }) => {
  const { openItems, handleAccordion } = useAccordionItems(defaultOpen)

  return (
    <div class="filter-sidebar p-8 shadow rounded-[8px]">
      {filters.map((filter, index) => {
        const { filters, title, id } = filter
        return (
          <AccordionBlock key={id} title={title} index={`${index}`} onToggle={handleAccordion} openItems={openItems}>
            {filters.map((filter, indexFilter) => {
              //TODO: Extract this logic
              if (typeof filter.value === 'string')
                return (
                  <FilterItem
                    key={filter.id}
                    type={filter.type}
                    id={filter.id}
                    title={filter.title}
                    selected={filterSelected?.includes(filter.id)}
                    onChange={onChange}
                    count={filter.count}
                  />
                )
              else
                return (
                  <AccordionBlock
                    key={id}
                    title={
                      <InputCheckbox
                        id={filter.id}
                        label={filter.title}
                        checked={filterSelected?.includes(filter.id)}
                        onChange={onChange}
                        count={filter.count}
                      />
                    }
                    index={`${index}-${indexFilter}`}
                    openItems={openItems}
                    onToggle={handleAccordion}>
                    {filter.value.map((filterNested) => {
                      return (
                        <FilterItem
                          key={filterNested.id}
                          type={filterNested.type}
                          id={filterNested.id}
                          title={filterNested.title}
                          selected={filterSelected?.includes(filterNested.id)}
                          onChange={onChange}
                          count={filterNested.count}
                        />
                      )
                    })}
                  </AccordionBlock>
                )
            })}
          </AccordionBlock>
        )
      })}
    </div>
  )
}

export default FilterSideBar
