import React, { forwardRef } from 'react'
import { cx } from '@utils/cx'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'

interface OptionListProps {
  options: ISelectOption[]
  selectedValue?: string
  onSelect: (option: ISelectOption) => void
  renderOption?: (option: ISelectOption, isSelected: boolean) => React.ReactNode
}

const OptionList = forwardRef<HTMLDivElement, OptionListProps>(({ options, selectedValue, onSelect, renderOption }, ref) => {
  return (
    <div ref={ref} className="select-input__dropdown flex flex-col w-full max-w-full">
      {options.map((option, index) => {
        const isSelected = option.value === selectedValue

        return (
          <button
            key={`select-input__dropdown-${option.value}-${index}`}
            className={cx('select-input__option text-justify py-[6px]', {
              'border-b border-BLACK/20': index !== options.length - 1,
              'bg-BLACK/30': isSelected,
              'hover:bg-GRAY': !isSelected
            })}
            onClick={() => onSelect(option)}>
            {renderOption ? (
              renderOption(option, isSelected)
            ) : (
              <span
                className={cx('md:text-nowrap font-s text-s text-BLACK pr-2', {
                  'opacity-60': !isSelected
                })}>
                {option.label}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
})

OptionList.displayName = 'OptionList'

export default OptionList
