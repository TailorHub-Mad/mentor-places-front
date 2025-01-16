import { type ChangeEvent } from 'react'

import { cx } from '@utils/cx'

export const RangeBoxNumbers = ({
  min,
  max,
  className,
  onChange,
  rangeValue
}: {
  min: number
  max: number
  className?: string
  onChange: (value: { min: number; max: number }) => void
  rangeValue: { min: number; max: number } // Value stored by parent component, might not yet reflect currently applied filter
}) => {
  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>, range: 'min' | 'max') => {
    const value = event.target.value
    const newValue = Math.min(Math.max(+value, min), max)
    const newRangeValue = { ...rangeValue, [range]: newValue }
    onChange(newRangeValue)
  }

  return (
    <div className={cx('w-full', className)}>
      <div className="flex justify-between gap-x-[6px]">
        {[rangeValue.min, rangeValue.max].map((boxValue, index) => {
          return (
            <input
              disabled // TODO: Implement editing feature
              key={index}
              type="text"
              inputMode="decimal"
              value={boxValue}
              onChange={(input) => handleTextInputChange(input, index === 0 ? 'min' : 'max')}
              className={cx(
                'bg-GRAY text-BLACK/60 no-controls w-[121px] rounded-[8px] h-[40px] transition-all duration-300 ease-in-out text-center focus:outline-none'
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
