import { type FC } from 'react'
import AccordionBlock from '@components/Accordion/components/AccordionBlock'
import useAccordionItems from '@components/Accordion/useAccordionItems'
import InputCheckbox from '@components/Form/Inputs/Checkbox/InputCheckbox'

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
}

const FilterSideBar: FC<IFilterSideBarProps> = ({ filterSelected, filters, onChange }) => {
  const { openItems, handleAccordion } = useAccordionItems({
    firstItemOpen: false
  })

  return (
    <div class="filter-sidebar p-8 shadow rounded-[8px]">
      {filters.map((filter, index) => {
        const { filters, title, id } = filter
        return (
          <AccordionBlock key={id} title={title} index={index} onToggle={handleAccordion} openItems={openItems}>
            {filters.map((filter, index) => {
              //TODO: Extract this logic
              switch (filter.type) {
                case EFilterType.CHECKBOX:
                  return (
                    <InputCheckbox id={filter.id} label={filter.title} checked={filterSelected?.includes(filter.id)} onChange={onChange} />
                  )
                default:
                  return (
                    <div key={index} class="id">
                      {filter.title}
                    </div>
                  )
              }
            })}
          </AccordionBlock>
        )
      })}
    </div>
  )
}

export default FilterSideBar
