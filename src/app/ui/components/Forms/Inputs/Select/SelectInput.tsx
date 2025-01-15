'use client'

import { type FC, useState } from 'react'
import SelectSearchDropdown from '@components/Forms/Inputs/Select/components/SelectDropdownPortal/SelectDropdownPortal'
import { useOverflowDetection } from '@hooks/useOverflowDetection'
import { useDropdownState } from '@hooks/useDropdownState'
import OptionList from '@components/Forms/Inputs/Select/components/OptionList/OptionList'
import SelectButton from '@components/Forms/Inputs/Select/components/SelectButton/SelectButton'

export interface ISelectOption {
  value: string
  label: string
}

export interface ISelectInputProps {
  placeholder?: string
  options: ISelectOption[]
  onChange: (value: string | undefined) => void
  disabled?: boolean
}

const SelectInput: FC<ISelectInputProps> = ({ options, placeholder, onChange, disabled = false }) => {
  const [valueSelected, setValueSelected] = useState<ISelectOption | undefined>(undefined)
  const { isOverflowing, parentRef, spanRef } = useOverflowDetection(valueSelected?.value, placeholder)
  const { isOpen, toggle, targetRef, selectInputRef } = useDropdownState(disabled)

  const handleSetInputValue = (option: ISelectOption) => {
    if (option.value === valueSelected?.value) {
      setValueSelected(undefined)
      onChange(undefined)
      toggle()

      return
    }

    setValueSelected(option)
    onChange(option.value)
    toggle()
  }

  return (
    <div className="select-input__wrapper">
      <SelectButton
        ref={targetRef}
        disabled={disabled}
        isOpen={isOpen}
        isOverflowing={isOverflowing}
        placeholder={placeholder}
        label={valueSelected?.label}
        onClick={toggle}
        parentRef={parentRef}
        spanRef={spanRef}
      />
      {options?.length > 0 && (
        <SelectSearchDropdown
          className="px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px] z-50"
          targetRef={targetRef}
          isVisible={isOpen}>
          <OptionList options={options} onSelect={handleSetInputValue} selectedValue={valueSelected?.value} ref={selectInputRef} />
        </SelectSearchDropdown>
      )}
    </div>
  )
}

export default SelectInput
