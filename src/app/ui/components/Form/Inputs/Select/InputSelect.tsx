'use client'

import { type FC, useState } from 'react'
import SelectSearchDropdown from '@components/Form/Inputs/Select/components/SelectDropdownPortal/SelectDropdownPortal'
import { useOverflowDetection } from '@hooks/useOverflowDetection'
import { useDropdownState } from '@hooks/useDropdownState'
import OptionList from '@components/Form/Inputs/Select/components/OptionList/OptionList'
import SelectButton from '@components/Form/Inputs/Select/components/SelectButton/SelectButton'

export interface ISelectOption {
  value: string
  label: string
}

export interface ISelectInputProps {
  placeholder?: string
  options: ISelectOption[]
  onChange: (value: string | undefined) => void
  disabled?: boolean
  valueSelected?: ISelectOption | undefined
}

const InputSelect: FC<ISelectInputProps> = ({ options, placeholder, onChange, disabled = false, valueSelected }) => {
  const [selectedOption, setSelectedOption] = useState<ISelectOption | undefined>(valueSelected)

  const { isOverflowing, parentRef, spanRef } = useOverflowDetection(selectedOption?.value, placeholder)
  const { isOpen, toggle, targetRef, selectInputRef } = useDropdownState(disabled)

  const getNewValueSelected = (option: ISelectOption): ISelectOption | undefined =>
    option.value === selectedOption?.value ? undefined : option

  const handleSetInputValue = (option: ISelectOption) => {
    const newValueSelected = getNewValueSelected(option)
    setSelectedOption(newValueSelected)
    onChange(newValueSelected?.value)
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
        label={selectedOption?.label}
        onClick={toggle}
        parentRef={parentRef}
        spanRef={spanRef}
      />
      {options?.length > 0 && (
        <SelectSearchDropdown
          className={'px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px] z-50'}
          targetRef={targetRef}
          isVisible={isOpen}>
          <OptionList options={options} selectedValue={selectedOption?.value} onSelect={handleSetInputValue} ref={selectInputRef} />
        </SelectSearchDropdown>
      )}
    </div>
  )
}

export default InputSelect
