import { useEffect, useRef, useState, useCallback } from 'react'
import { RangeBoxNumbers } from '@components/Form/Inputs/Range/components/RangeBoxNumbers'
import MultiRangeSlider from '@components/Form/Inputs/Range/components/MultiRangeSlider'
import { debounce } from 'cx/util'

export type TFilterTypeProps = 'price' | 'rating' | 'distance' // Example types

export interface IInputRangeProps {
  label?: string
  min?: number
  max?: number
  isOnModal?: boolean
  onChange: (type: TFilterTypeProps, range: [number, number]) => void
  selectedFilterValues: {
    [key in TFilterTypeProps]?: { range: [number, number] }
  }
  filterType: TFilterTypeProps
}

const DEFAULT_MIN = 0
const DEFAULT_MAX = 100

const InputRange = ({
  isOnModal,
  selectedFilterValues,
  onChange,
  label,
  filterType,
  max = DEFAULT_MAX,
  min = DEFAULT_MIN
}: IInputRangeProps) => {
  const [range, setRange] = useState({ min, max })

  const invokeOnChange = useRef(debounce((min: number, max: number) => onChange(filterType, [min, max]), 300)).current

  useEffect(() => {
    invokeOnChange(range.min, range.max)
  }, [range])

  const [selectedMin, selectedMax] = selectedFilterValues[filterType]?.range ?? [min, max]

  useEffect(() => {
    if (selectedMin !== range.min || selectedMax !== range.max) {
      setRange({ min: selectedMin ?? min, max: selectedMax ?? max })
    }
  }, [selectedMin, selectedMax, min, max])

  const handleSetRange = useCallback((value: { min: number; max: number }) => {
    setRange(value)
  }, [])

  return (
    <div className={`relative z-50 ${isOnModal ? 'max-w-full' : 'max-w-[269px]'}`}>
      {label && !isOnModal && (
        <div className="label-wrapper mb-2">
          <span className="font-s text-s text-BLACK/60">{label}</span>
        </div>
      )}
      <div className="flex flex-col relative items-center">
        <RangeBoxNumbers className="mb-4" rangeValue={range} onChange={handleSetRange} min={min} max={max} />
        <MultiRangeSlider onChange={handleSetRange} min={min} max={max} />
      </div>
    </div>
  )
}

export default InputRange
