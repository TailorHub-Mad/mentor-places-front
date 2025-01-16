import { type ChangeEvent, useEffect, useRef, useState } from 'react'
import { ControlRangeInput } from '@components/Form/Inputs/Range/components/ControlRangeInput'
import { cx } from '@utils/cx'
import InputRange from './InputRange'

export type RangeSliderProps = {
  min: number
  max: number
  value?: { min: number; max: number }
  step: number
  onChange: (value: { min: number; max: number }) => void
  setIsChanging: (isChanging: boolean) => void
  className?: string
}

export enum ActiveRange {
  MIN = 'min',
  MAX = 'max'
}

const RangeSlider = ({ min, max, value, step, onChange, setIsChanging, className }: RangeSliderProps) => {
  const [minValue, setMinValue] = useState(value ? value.min : min)
  const [maxValue, setMaxValue] = useState(value ? value.max : max)
  const [active, setActive] = useState<ActiveRange.MIN | ActiveRange.MAX | null>()

  useEffect(() => {
    if (value) {
      setMinValue(value.min)
      setMaxValue(value.max)
    }
  }, [value])

  const timeout = useRef<NodeJS.Timeout | null>(null)

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newMinVal = Math.min(+e.target.value, maxValue - step)

    setActive(ActiveRange.MIN)

    if (!value) setMinValue(newMinVal)
    onChange({ min: newMinVal, max: maxValue })

    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setActive(null)
    }, 1250)
  }

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newMaxVal = Math.max(+e.target.value, minValue + step)

    setActive(ActiveRange.MAX)

    if (!value) setMaxValue(newMaxVal)
    onChange({ min: minValue, max: newMaxVal })

    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setActive(null)
    }, 1250)
  }

  const minPos = Math.max(0, ((minValue - min) / (max - min)) * 100)
  const maxPos = Math.min(100, ((maxValue - min) / (max - min)) * 100)

  return (
    <div data-testid="mendes-range-slider" className={cx('wrapper flex flex-col justify-center relative mr-[10px] my-[12px]', className)}>
      <div className="input-wrapper -mx-[6px] absolute h-[24px] w-[calc(100%+16px)]">
        <InputRange
          className="input-min"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
          setIsChanging={setIsChanging}
        />
        <InputRange
          className="input-max"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
          setIsChanging={setIsChanging}
        />
      </div>

      <div className="control-wrapper w-full absolute h-[24px]">
        <ControlRangeInput
          className={cx('min', active === 'min' ? 'bg-black border-white after:bg-white' : 'bg-white border border-black after:bg-black')}
          style={{ left: `${minPos}%` }}
        />
        <div className="rail absolute w-full top-1/2 transform -translate-y-1/2 h-[1px] rounded-[3px] bg-content-primary-lowest">
          <div className="inner-rail absolute bg-black h-full" style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }} />
        </div>
        <ControlRangeInput
          className={cx('max', active === 'max' ? 'bg-black border-white after:bg-white' : 'bg-white border border-black after:bg-black')}
          style={{ left: `${maxPos}%` }}
        />
      </div>
    </div>
  )
}

export default RangeSlider
