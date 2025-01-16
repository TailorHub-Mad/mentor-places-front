import { type ChangeEvent, useRef } from 'react'

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
  const minRef = useRef<HTMLInputElement>(null)
  const maxRef = useRef<HTMLInputElement>(null)

  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>, range: 'min' | 'max') => {
    const value = event.target.value
    const newValue = Math.min(Math.max(+value, min), max)
    const newRangeValue = { ...rangeValue, [range]: newValue }
    onChange(newRangeValue)
  }

  return (
    <div data-testid="range-box-number" className={className}>
      <div className="flex gap-x-[6px]">
        {[rangeValue.min, rangeValue.max].map((boxValue, index) => {
          const ref = index === 0 ? minRef : maxRef

          return (
            <input
              ref={ref}
              key={index}
              type="text"
              inputMode="decimal"
              value={boxValue}
              onChange={(input) => handleTextInputChange(input, index === 0 ? 'min' : 'max')}
              className={cx(
                'no-controls border rounded-none min-w-[45px] flex flex-col justify-center h-[40px] px-[12px] transition-all duration-300 ease-in-out mendes text-center body-m focus:outline-none'
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
