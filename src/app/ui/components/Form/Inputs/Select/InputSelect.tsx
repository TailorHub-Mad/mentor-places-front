'use client'

import { type FC } from 'react'
import SelectSearchDropdown from '@components/Form/Inputs/Select/components/SelectDropdownPortal/SelectDropdownPortal'
import { useOverflowDetection } from '@hooks/useOverflowDetection'
import { useDropdownState } from '@hooks/useDropdownState'
import OptionList from '@components/Form/Inputs/Select/components/OptionList/OptionList'
import SelectButton from '@components/Form/Inputs/Select/components/SelectButton/SelectButton'

import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'

export interface ISelectOption {
  value: string
  label: string
}

export interface ISelectInputProps {
  placeholder?: string
  options: ISelectOption[]
  onChange: (value: IFilterSelection) => void
  disabled?: boolean
  valueSelected?: string
}

const InputSelect: FC<ISelectInputProps> = ({ options, placeholder, onChange, disabled = false, valueSelected }) => {
  const { isOverflowing, parentRef, spanRef } = useOverflowDetection(valueSelected as string, placeholder)
  const { isOpen, toggle, targetRef, selectInputRef } = useDropdownState(disabled)

  const handleSetInputValue = (option: ISelectOption) => {
    onChange({
      value: option.value,
      id: option.value
    })
    toggle()
  }

  const labelValueSelected = options.find((option) => option.value === valueSelected)?.label || valueSelected

  return (
    <div className="select-input__wrapper">
      <SelectButton
        ref={targetRef}
        disabled={disabled}
        isOpen={isOpen}
        isOverflowing={isOverflowing}
        placeholder={placeholder}
        label={labelValueSelected}
        onClick={toggle}
        parentRef={parentRef}
        spanRef={spanRef}
      />
      {options?.length > 0 && (
        <SelectSearchDropdown
          className={'px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px]'}
          targetRef={targetRef}
          isVisible={isOpen}>
          <OptionList options={options} selectedValue={valueSelected} onSelect={handleSetInputValue} ref={selectInputRef} />
        </SelectSearchDropdown>
      )}
    </div>
  )
}

export default InputSelect
