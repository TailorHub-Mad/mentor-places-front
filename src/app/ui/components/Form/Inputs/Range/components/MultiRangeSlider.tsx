import { type FC, useCallback, useEffect, useRef } from 'react'
import { cx } from '@utils/cx'

interface IMultiRangeSliderProps {
  rangeValue: number[]
  onChange: (value: string[]) => void
  className?: string
  min?: number
  max?: number
}

const MultiRangeSlider: FC<IMultiRangeSliderProps> = ({ rangeValue, onChange, min = 100, max = 10000 }) => {
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - rangeValue[0]) / (rangeValue[1] - rangeValue[0])) * 100),
    [rangeValue]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(rangeValue[0])
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [rangeValue, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current)
      const maxPercent = getPercent(rangeValue[1])

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [rangeValue, getPercent])

  const handleOnChange = (value: string, type: 'min' | 'max') => {
    const valueToChange = type === 'min' ? [value, rangeValue[1].toString()] : [rangeValue[0].toString(), value]

    onChange(valueToChange)
  }

  return (
    <div className="multi-range-slider w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={rangeValue[0]}
        ref={minValRef}
        onChange={(event) => {
          handleOnChange(event.target.value, 'min')
        }}
        className={cx('thumb z-[3]', {
          'z-[5]': rangeValue[0] > max - 100
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={rangeValue[1]}
        ref={maxValRef}
        onChange={(event) => {
          handleOnChange(event.target.value, 'max')
        }}
        className="thumb z-[4]"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range bg-BLUE " />
      </div>
    </div>
  )
}

export default MultiRangeSlider
