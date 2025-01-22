import type { FC } from 'react'
import type { IFilterItem, IFilterSelection } from '@components/Filters/SideBar/FilterSideBar'

interface IFilterSelectedControlProps {
  filterSelected: IFilterSelection[]
  onChange: (value: IFilterSelection) => void
}

const FilterSelectedControl: FC<IFilterSelectedControlProps> = ({ filterSelected, onChange }) => {
  const handleOnChange = (id: string) => {
    onChange({
      id,
      value: ''
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {filterSelected.map((filter, index) => {
        if (!filter.value) return
        const transformValue = filterValueToString(filter.value)
        return (
          <button onClick={() => handleOnChange(filter.id)} key={`${transformValue}-${index}`} className="px-4 py-1 border rounded-full">
            {transformValue} x
          </button>
        )
      })}
    </div>
  )
}

export default FilterSelectedControl

const filterValueToString = (filterValue: string | string[] | IFilterItem[]) => {
  if (typeof filterValue === 'string') return filterValue
  if (Array.isArray(filterValue)) return filterValue.join('-')
}
