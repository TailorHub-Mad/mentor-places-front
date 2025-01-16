import type { CSSProperties, FC } from 'react'
import { cx } from '@utils/cx'

interface IControlRangeInputProps {
  className?: string
  style?: CSSProperties
}

export const ControlRangeInput: FC<IControlRangeInputProps> = ({ className, style }) => {
  return (
    <div
      className={cx(
        'control w-[24px] h-[24px] -ml-[12px] rounded-[50%] transform -translate-y-1/2 absolute top-[50%] z-[2] border after:absolute after:w-[4px] after:h-[4px] after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rotate-45',
        className
      )}
      style={style}
    />
  )
}
