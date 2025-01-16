import { useEffect, useRef, useState } from 'react'
import { cx } from '@utils/cx'
import RangeSlider from '@components/Form/Inputs/Range/components/RangeSlider'
import { RangeBoxNumbers } from '@components/Form/Inputs/Range/components/RangeBoxNumbers'

export type TFilterTypeProps = string // TODO: Define filter types

export interface IInputRangeProps {
  label?: string
  min?: number
  max?: number
  step: number
  isOnModal?: boolean
  onChange: (type: TFilterTypeProps, range: [number, number]) => void
  selectedFilterValues: {
    [key: TFilterTypeProps]: {
      range: [number, number]
    }
  }
  filterType: TFilterTypeProps
}

const CustomInputRange = ({ step, isOnModal, selectedFilterValues, onChange, label, filterType, max, min }: IInputRangeProps) => {
  const [range, setRange] = useState({
    min: min ?? 0,
    max: max ?? 0
  })
  const [isChanging, setIsChanging] = useState(false)
  const hasChangedRef = useRef(false)

  useEffect(() => {
    const hasChanged = hasChangedRef.current

    if (!isChanging && hasChanged) {
      onChange(filterType, [range.min ?? 0, range.max ?? 0])
    } else {
      if (!hasChanged) hasChangedRef.current = true
    }
  }, [isChanging])

  const [selectedMin, selectedMax] = selectedFilterValues[filterType]?.range ?? [min, max]

  useEffect(() => {
    if (selectedMin && selectedMax) setRange({ min: selectedMin, max: selectedMax })
    else
      setRange({
        min: min ?? 0,
        max: max ?? 0
      })
  }, [selectedMin, selectedMax, min, max])

  return (
    <div data-testid="mendes-input-range" className="relative z-50">
      {label && !isOnModal && (
        <div className="label-wrapper mb-2">
          <span className="mendes text-content-primary-mid body-m">{label}</span>
        </div>
      )}
      <div className="flex relative items-center">
        <RangeSlider
          className={cx('flex-1 mendes-range-slider ml-5', {
            'w-[164px]': !isOnModal
          })}
          onChange={setRange}
          setIsChanging={setIsChanging}
          value={range}
          max={max ?? 0}
          min={min ?? 0}
          step={step}
        />
        <RangeBoxNumbers max={max ?? 0} min={min ?? 0} rangeValue={range} className="ml-[8px]" onChange={setRange} />
      </div>
    </div>
  )
}

export default CustomInputRange
