import type { FC } from 'react'
import type { IFilterItem, IFilterSelection } from '@components/Filters/SideBar/FilterSideBar'
import { useTranslations } from 'next-intl'

interface IFilterSelectedControlProps {
  filterSelected: IFilterSelection[]
  onChange: (value: IFilterSelection) => void
  onClear: () => void
}

const FilterSelectedControl: FC<IFilterSelectedControlProps> = ({ filterSelected, onChange, onClear }) => {
  const t = useTranslations()

  const handleOnChange = (id: string) => {
    onChange({
      id,
      value: ''
    })
  }

  const handleOnClear = () => {
    onClear()
  }

  return (
    <div className="filter-selected-control">
      <div className="filter-selected-control__header flex items-center justify-between">
        <h3 className="mb-[20px] font-s text-s">{t('filters.selectedFilters')}</h3>
        <button onClick={() => handleOnClear()} className="font-s text-s text-BLACK/40 underline underline-offset-4">
          {t('filters.delete')}
        </button>
      </div>
      {filterSelected.length > 0 && (
        <div className="filter-selected-control__filters flex flex-wrap items-center gap-3 mb-[15px]">
          {filterSelected.map((filter, index) => {
            if (!filter.value) return
            const transformValue = filterValueToString(filter.label || filter.value)
            return (
              <button
                onClick={() => handleOnChange(filter.id)}
                key={`${transformValue}-${index}`}
                className="px-[10px] py-[5px] rounded-[8px] bg-GRAY font-s text-BLACK">
                {transformValue} <span className="ml-2">x</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FilterSelectedControl

const filterValueToString = (filterValue: string | string[] | IFilterItem[]) => {
  if (typeof filterValue === 'string') return filterValue
  if (Array.isArray(filterValue)) return filterValue.join('-')
}
