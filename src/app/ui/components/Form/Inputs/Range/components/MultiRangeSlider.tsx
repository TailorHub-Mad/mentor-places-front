import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import { cx } from '@utils/cx'
import { RangeBoxNumbers } from '@components/Form/Inputs/Range/components/RangeBoxNumbers'

interface IMultiRangeSliderProps {
  range: number[]
  onChange: (value: string[]) => void
  className?: string
  min?: number
  max?: number
}

const MultiRangeSlider: FC<IMultiRangeSliderProps> = ({ range, onChange, min = 100, max = 10000 }) => {
  const [rangeValue, setRangeValue] = useState<number[]>(range) // Local state
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const rangeRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null) // Ref for debounce

  // Sync `rangeValue` state with `range` prop when `range` prop changes
  useEffect(() => {
    setRangeValue(range)
  }, [range])

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100), // Base percentage on min/max props
    [min, max]
  )

  const updateSliderStyles = useCallback(() => {
    if (minValRef.current && maxValRef.current && rangeRef.current) {
      const minPercent = getPercent(rangeValue[0])
      const maxPercent = getPercent(rangeValue[1])
      rangeRef.current.style.left = `${minPercent}%`
      rangeRef.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [rangeValue, getPercent])

  // Update slider styles on range change
  useEffect(() => {
    updateSliderStyles()
  }, [rangeValue, updateSliderStyles])

  // Debounce the onChange callback
  const debouncedOnChange = useCallback(
    (value: number[]) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      debounceRef.current = setTimeout(() => {
        onChange(value.map(String)) // Propagate updated range to parent after debounce
      }, 300)
    },
    [onChange]
  )

  // Handle slider changes
  const handleMinChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Math.min(+event.target.value, rangeValue[1] - 1) // Ensure min <= max
      const updatedValue = [newValue, rangeValue[1]]
      setRangeValue(updatedValue)
      debouncedOnChange(updatedValue) // Call debounced onChange
    },
    [rangeValue, debouncedOnChange]
  )

  const handleMaxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Math.max(+event.target.value, rangeValue[0] + 1) // Ensure max >= min
      const updatedValue = [rangeValue[0], newValue]
      setRangeValue(updatedValue)
      debouncedOnChange(updatedValue) // Call debounced onChange
    },
    [rangeValue, debouncedOnChange]
  )

  return (
    <div className="">
      <RangeBoxNumbers className="mb-4" rangeValue={rangeValue} onChangeMin={handleMinChange} onChangeMax={handleMaxChange} />
      <div className="multi-range-slider w-full">
        <input
          type="range"
          min={min}
          max={max}
          value={rangeValue[0]}
          ref={minValRef}
          onChange={handleMinChange}
          className={cx('thumb z-[3]', {
            'z-[5]': rangeValue[0] > max - 100
          })}
        />
        <input type="range" min={min} max={max} value={rangeValue[1]} ref={maxValRef} onChange={handleMaxChange} className="thumb z-[4]" />

        <div className="slider">
          <div className="slider__track" />
          <div ref={rangeRef} className="slider__range bg-BLUE " />
        </div>
      </div>
    </div>
  )
}

export default MultiRangeSlider
