'use client'

import { type FC, type RefObject, useState } from 'react'
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
  const { isOpen, toggle, targetRef, selectInputRef, handleShowDropdown } = useDropdownState(disabled)

  const [inputValue, setInputValue] = useState<string>(valueSelected || '')

  const handleSetInputValue = (option: ISelectOption) => {
    setInputValue(option.label) // Update local state with selected option label
    onChange({
      value: option.value,
      id: option.value
    })
    toggle()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)

    if (!event.target.value) {
      handleShowDropdown(false)
      return
    }

    handleShowDropdown(true)
  }

  const labelValueSelected = options.find((option) => option.value === valueSelected)?.label || valueSelected

  const handleOnBlur = () => {
    setInputValue(labelValueSelected || '')
    handleShowDropdown(false)
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
        onBlur={handleOnBlur}
        value={inputValue}
        onChange={handleInputChange} // Update the input value as user types
      />
      {options?.length > 0 && (
        <SelectSearchDropdown
          className={'px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px] z-50'}
          targetRef={targetRef}
          isVisible={isOpen}>
          <OptionList options={options} selectedValue={valueSelected} onSelect={handleSetInputValue} ref={selectInputRef} />
        </SelectSearchDropdown>
      )}
    </div>
  )
}

export default InputSearch
