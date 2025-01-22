import type { FC, ReactNode } from 'react'
import InputCheckbox from '@components/Form/Inputs/Checkbox/InputCheckbox'
import DateFilter from '@components/Filters/DateFilter/DateFilter'
import InputRange from '@components/Form/Inputs/Range/InputRange'
import { EFilterType, type IFilterSelection } from '@interfaces/filterSidebar.interfaces'

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
    [EFilterType.DATE]: () => <DateFilter id={id} filterSelected={filterSelected} onChange={onChange} />,
    [EFilterType.PRICE]: () => (
      <InputRange label={title} id={id} selectedFilterValues={filterSelected} onChange={onChange} filterType={'price'} />
    )
  }

  // Default to a fallback if the type doesn't match
  const renderComponent = typeRenderers[type] || (() => <div>Invalid Filter Type</div>)

  return <div className="filter-item-wrapper border-b border-BLACK/20 py-2">{renderComponent()}</div>
}

export default FilterItem
