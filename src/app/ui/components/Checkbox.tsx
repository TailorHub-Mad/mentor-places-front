import { cx } from '@utils/cx'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import CheckIcon from './icons/CheckIcon'

export interface ICheckboxInputProps {
  id: string
  label: string | ReactNode // Support string or custom JSX for the label
  className?: string
  inputClassName?: string
  labelClassName?: string
}

type TCheckboxInput = ICheckboxInputProps & InputHTMLAttributes<HTMLInputElement>

const CheckboxInput = forwardRef<HTMLInputElement, TCheckboxInput>(
  ({ id, label, checked, disabled, className, inputClassName = '', labelClassName = '', ...props }, ref) => {
    return (
      <div className={cx('filter-input-checkbox__wrapper', className)}>
        <input id={id} ref={ref} type="checkbox" className="hidden" {...props} />
        <label
          htmlFor={id}
          className={cx('filter-input-checkbox__label flex items-center gap-3', {
            'opacity-40 pointer-events-none': disabled,
            'cursor-pointer': !disabled
          })}>
          <div
            className={cx(
              'filter-input-checkbox__input w-[16px] h-[16px] rounded-none border ring-offset-2 flex items-center justify-center cursor-pointer',
              inputClassName,
              {
                'bg-BLACK': checked
              }
            )}>
            <CheckIcon />
          </div>
          <span className={labelClassName}>{label}</span>
        </label>
      </div>
    )
  }
)

CheckboxInput.displayName = 'CheckboxInput'

export default CheckboxInput
