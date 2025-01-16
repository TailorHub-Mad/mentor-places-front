import { cx } from '@utils/cx'
import type { ChangeEvent } from 'react'

type InputRangeProps = {
  className?: string
  value: number
  min: number
  max: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  step: number
  setIsChanging: (isChanging: boolean) => void
}

const InputRange = ({ className, value, min, max, onChange, step, setIsChanging }: InputRangeProps) => {
  return (
    <input
      className={cx('input absolute w-full pointer-events-none appearance-none h-full opacity-0 z-[3] p-0', className)}
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      onMouseDown={() => setIsChanging(true)}
      onTouchStart={() => setIsChanging(true)}
      onMouseUp={() => setIsChanging(false)}
      onTouchEnd={() => setIsChanging(false)}
    />
  )
}

export default InputRange
