import type { FC } from 'react'
import { EFilterType } from '@components/Filters/SideBar/FilterSideBar'
import InputCheckbox from '@components/Form/Inputs/Checkbox/InputCheckbox'

interface IFilterItemProps {
  id: string
  title: string
  count: number
  selected: boolean
  onChange: (value: string) => void
  type: EFilterType
}

const FilterItem: FC<IFilterItemProps> = ({ type, onChange, selected, id, title, count }) => {
  switch (type) {
    case EFilterType.CHECKBOX:
      return <InputCheckbox id={id} label={title} checked={selected} onChange={onChange} count={count} />
    case EFilterType.DATE:
      return <div class="i">To be implemented</div>
    case EFilterType.PRICE:
      return <div class="cl">To be implemented</div>
  }
}

export default FilterItem
