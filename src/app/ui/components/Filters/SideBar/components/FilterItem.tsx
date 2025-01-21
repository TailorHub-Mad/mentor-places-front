import type { FC, ReactNode } from 'react'
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
  const typeRenderers: Record<EFilterType, () => ReactNode> = {
    [EFilterType.CHECKBOX]: () => <InputCheckbox id={id} label={title} checked={selected} onChange={onChange} count={count} />,
    [EFilterType.DATE]: () => <div className="i">To be implemented</div>,
    [EFilterType.PRICE]: () => <div className="cl">To be implemented</div>
  }

  // Default to a fallback if the type doesn't match
  const renderComponent = typeRenderers[type] || (() => <div>Invalid Filter Type</div>)

  return <div className="filter-item-wrapper border-b border-BLACK/20 py-2">{renderComponent()}</div>
}

export default FilterItem
