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
              switch (filter.type) {
                case EFilterType.CHECKBOX:
                  if (typeof filter.value === 'string')
                    return (
                      <InputCheckbox
                        id={filter.id}
                        label={filter.title}
                        checked={filterSelected?.includes(filter.id)}
                        onChange={onChange}
                        count={filter.count}
                      />
                    )
                  else
                    return (
                      <AccordionBlock
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
                        {filter.value.map((filterNested, indexINested) => {
                          return (
                            <InputCheckbox
                              key={indexINested}
                              id={filterNested.id}
                              label={filterNested.title}
                              checked={filterSelected?.includes(filterNested.id)}
                              onChange={onChange}
                              count={filterNested.count}
                            />
                          )
                        })}
                      </AccordionBlock>
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
