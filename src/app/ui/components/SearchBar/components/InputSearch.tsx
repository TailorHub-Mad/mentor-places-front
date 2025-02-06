'use client'

import { type FC, type RefObject, useEffect, useRef, useState } from 'react'
import SelectSearchDropdown from '@components/Form/Inputs/Select/components/SelectDropdownPortal/SelectDropdownPortal'
import { useDropdownState } from '@hooks/useDropdownState'
import OptionList from '@components/Form/Inputs/Select/components/OptionList/OptionList'

import type { IFilterSelection } from '@interfaces/filterSidebar.interfaces'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'
import type { ESearchType } from '@components/SearchBar/SearchBar'

export interface ISelectInputProps {
  type: ESearchType
  placeholder?: string
  options: ISelectOption[]
  onChange: (value: IFilterSelection) => void
  disabled?: boolean
  valueSelected?: string
  id?: string
  onSearch: (value: string, type: ESearchType) => void
}

const InputSearch: FC<ISelectInputProps> = ({ options, placeholder, onChange, disabled = false, valueSelected, id, type, onSearch }) => {
  const { targetRef, selectInputRef } = useDropdownState(disabled)

  const [inputValue, setInputValue] = useState<string>(valueSelected || '')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [labelValueSelected, setLabelValueSelected] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (valueSelected !== undefined) {
      const newLabel = options.find((option) => option.value === valueSelected)?.label || valueSelected
      setInputValue(newLabel) // Sync input value
    }
  }, [valueSelected, options])

  const handleSetInputValue = (option: ISelectOption | null) => {
    if (!option) return

    if (inputValue !== option.value) setInputValue(option.value)

    onChange({
      value: option.label,
      id: option.value
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInputValue(value)

    if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current)

    debounceTimeoutRef.current = setTimeout(() => {
      onSearch(value, type)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current)
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current)
    }
  }, [])

  const handleOnBlur = () => {
    const labelValueSelected = options.find((option) => option.value === inputValue)?.label || valueSelected || ''
    setLabelValueSelected(labelValueSelected)

    if (inputValue !== labelValueSelected) {
      setInputValue(labelValueSelected)
    }

    if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current)

    blurTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 350)
  }

  const handleOnFocus = () => {
    onSearch('', type)
    setIsDropdownOpen(true)
  }

  const adjustHoveredIndex = (direction: 'up' | 'down') => {
    setHoveredIndex((prevIndex) =>
      direction === 'down' ? (prevIndex + 1) % options.length : prevIndex > 0 ? prevIndex - 1 : options.length - 1
    )
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownOpen) return

    switch (event.key) {
      case 'ArrowDown':
        adjustHoveredIndex('down')
        break
      case 'ArrowUp':
        adjustHoveredIndex('up')
        break
      case 'Enter':
        if (hoveredIndex !== -1) {
          handleSetInputValue(options[hoveredIndex])
          setIsDropdownOpen(false)
        }
        break
    }
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
        placeholder={labelValueSelected || placeholder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={inputValue}
        onChange={handleInputChange} // Update the input value as user types
        onKeyDown={handleKeyDown}
      />
      {options?.length > 0 && (
        <SelectSearchDropdown
          className={'px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px] z-50'}
          targetRef={targetRef}
          isVisible={isDropdownOpen}>
          <OptionList
            hoveredIndex={hoveredIndex}
            options={options}
            selectedValue={valueSelected}
            onSelect={handleSetInputValue}
            ref={selectInputRef}
          />
        </SelectSearchDropdown>
      )}
    </div>
  )
}

export default InputSearch
