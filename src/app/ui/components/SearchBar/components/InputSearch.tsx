'use client'

import { type FC, type RefObject, useEffect, useState } from 'react'
import SelectSearchDropdown from '@components/Form/Inputs/Select/components/SelectDropdownPortal/SelectDropdownPortal'
import { useDropdownState } from '@hooks/useDropdownState'
import OptionList from '@components/Form/Inputs/Select/components/OptionList/OptionList'

import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'

export interface ISelectInputProps {
  placeholder?: string
  options: ISelectOption[]
  onChange: (value: IFilterSelection) => void
  disabled?: boolean
  valueSelected?: string
  id?: string
}

const InputSearch: FC<ISelectInputProps> = ({ options, placeholder, onChange, disabled = false, valueSelected, id }) => {
  const { targetRef, selectInputRef } = useDropdownState(disabled)

  const [inputValue, setInputValue] = useState<string>(valueSelected || '')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    if (valueSelected !== undefined) {
      const newLabel = options.find((option) => option.value === valueSelected)?.label || valueSelected
      setInputValue(newLabel) // Sync input value
    }
  }, [valueSelected, options])

  const handleSetInputValue = (option: ISelectOption) => {
    console.log('handleSetInputValue: ', { option })
    setInputValue(option.value) // Update local state with selected option label
    onChange({
      value: option.value,
      id: option.value
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleOnBlur = () => {
    // Reset input value to match selected option's label (or keep it)
    const labelValueSelected = options.find((option) => option.value === valueSelected)?.label || valueSelected || ''
    setInputValue(labelValueSelected)
    // Add a delay of 200ms before closing the dropdown
    setTimeout(() => {
      setIsDropdownOpen(false)
    }, 100)
  }

  const handleOnFocus = () => {
    setIsDropdownOpen(true)
  }

  return (
    <div className="select-input__wrapper">
      <input
        ref={targetRef as RefObject<HTMLInputElement>}
        className="px-3 py-2 bg-GRAY rounded-[8px] focus:outline-none w-[222px] text-[14px]"
        type="text"
        name={id}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={inputValue}
        onChange={handleInputChange} // Update the input value as user types
      />
      {options?.length > 0 && (
        <SelectSearchDropdown
          className={'px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px] z-50'}
          targetRef={targetRef}
          isVisible={isDropdownOpen}>
          <OptionList options={options} selectedValue={valueSelected} onSelect={handleSetInputValue} ref={selectInputRef} />
        </SelectSearchDropdown>
      )}
    </div>
  )
}

export default InputSearch
