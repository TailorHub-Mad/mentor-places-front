import type { FC } from 'react'
import { ESortDirection } from '../../../../lib/enums/globals.enums'
import { useDropdownState } from '@hooks/useDropdownState'
import SelectSearchDropdown from '@components/Form/Inputs/Select/components/SelectDropdownPortal/SelectDropdownPortal'
import OptionList from '@components/Form/Inputs/Select/components/OptionList/OptionList'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'
import SelectButton from '@components/Form/Inputs/Select/components/SelectButton/SelectButton'
import { useOverflowDetection } from '@hooks/useOverflowDetection'
import ArrowUp from '@components/icons/ArrowUp'
import { cx } from '@utils/cx'

interface ISortSelectTriggerProps {
  sortOptions: ISelectOption[]
  selectedSort: string
  order: ESortDirection
  onSelect: (args: { sort: string; order: ESortDirection }) => void
}

const SortSelectTrigger: FC<ISortSelectTriggerProps> = ({ sortOptions, selectedSort, order, onSelect }) => {
  const { isOverflowing, parentRef, spanRef } = useOverflowDetection(selectedSort as string, selectedSort)
  const { isOpen, toggle, targetRef, selectInputRef } = useDropdownState()

  const handleSetInputValue = (option: ISelectOption) => {
    onSelect({
      sort: option.value,
      order
    })
    toggle()
  }

  const handleSortOrder = (order: ESortDirection) => {
    onSelect({
      sort: selectedSort,
      order
    })
  }

  const renderSortButton = () => {
    const isAsc = order === ESortDirection.ASC
    return (
      <button onClick={() => handleSortOrder(isAsc ? ESortDirection.DESC : ESortDirection.ASC)}>
        <ArrowUp
          className={cx({
            'rotate-180': isAsc
          })}
        />
      </button>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <SelectButton
          ref={targetRef}
          disabled={false}
          isOpen={isOpen}
          isOverflowing={isOverflowing}
          placeholder={''}
          label={selectedSort}
          onClick={toggle}
          parentRef={parentRef}
          spanRef={spanRef}
          isSelectInput={false}
        />
        {renderSortButton()}
      </div>
      {sortOptions?.length > 0 && (
        <SelectSearchDropdown
          className={'px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px] z-50'}
          targetRef={targetRef}
          isVisible={isOpen}>
          <OptionList options={sortOptions} selectedValue={selectedSort} onSelect={handleSetInputValue} ref={selectInputRef} />
        </SelectSearchDropdown>
      )}
    </>
  )
}

export default SortSelectTrigger
