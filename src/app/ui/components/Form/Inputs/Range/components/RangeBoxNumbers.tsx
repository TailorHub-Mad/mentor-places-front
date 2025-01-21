import { type ChangeEvent } from 'react'

import { cx } from '@utils/cx'

export const RangeBoxNumbers = ({
  className,
  onChange,
  rangeValue
}: {
  className?: string
  onChange: (value: string[]) => void
  rangeValue: number[]
}) => {
  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>, range: 'min' | 'max') => {
    const value = event.target.value
    if (!value) return

    const newRangeValue: string[] = range === 'min' ? [value, rangeValue[1].toString()] : [rangeValue[0].toString(), value]
    onChange(newRangeValue)
  }

  return (
    <div className={cx('w-full', className)}>
      <div className="flex justify-between gap-x-[6px]">
        {rangeValue.map((boxValue, index) => {
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
