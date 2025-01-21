import type { FC, ReactNode } from 'react'
import { EFilterType, type IFilterSelection } from '@components/Filters/SideBar/FilterSideBar'
import InputCheckbox from '@components/Form/Inputs/Checkbox/InputCheckbox'
import DateFilter from '@components/Filters/DateFilter/DateFilter'

interface IFilterItemProps {
  id: string
  title: string
  count?: number
  selected: boolean
  onChange: (value: IFilterSelection) => void
  type: EFilterType
  filterSelected: IFilterSelection[]
}

const FilterItem: FC<IFilterItemProps> = ({ type, onChange, selected, id, title, count, filterSelected }) => {
  const typeRenderers: Record<EFilterType, () => ReactNode> = {
    [EFilterType.CHECKBOX]: () => <InputCheckbox id={id} label={title} checked={selected} onChange={onChange} count={count} />,
    [EFilterType.DATE]: () => <DateFilter filterSelected={filterSelected} onChange={onChange} />,
    [EFilterType.PRICE]: () => <div className="cl">To be implemented</div>
  }

  // Default to a fallback if the type doesn't match
  const renderComponent = typeRenderers[type] || (() => <div>Invalid Filter Type</div>)

  return <div className="filter-item-wrapper border-b border-BLACK/20 py-2">{renderComponent()}</div>
}

export default FilterItem
