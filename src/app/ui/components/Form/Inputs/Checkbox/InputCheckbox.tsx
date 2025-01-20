import type { ChangeEvent, FC, ReactNode } from 'react'
import { cx } from '@utils/cx'
import CheckIcon from '@components/icons/CheckIcon'

export interface IInputCheckboxProps {
  id: string
  label: string | ReactNode // Support string or custom JSX for the label
  checked: boolean
  onChange: (id: string, checked: boolean) => void
  count?: number
  disabled?: boolean
  className?: string
  inputClassName?: string
  labelClassName?: string
  countClassName?: string
}

const InputCheckbox: FC<IInputCheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  count,
  disabled = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  countClassName = ''
}) => {
  const handleIsChecked = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(id, event.target.checked)
  }

  return (
    <div className={cx('filter-input-checkbox flex items-center justify-between', className)}>
      <div className="filter-input-checkbox__wrapper">
        <input className="hidden" id={id} type="checkbox" checked={checked} onChange={handleIsChecked} disabled={disabled} />
        <label
          htmlFor={id}
          className={cx('filter-input-checkbox__label flex items-center gap-3', {
            'opacity-40 pointer-events-none': disabled,
            'cursor-pointer': !disabled
          })}>
          <div
            className={cx(
              'filter-input-checkbox__input w-[16px] h-[16px] rounded-none border border-gray-300 ring-offset-2 text-blue-500 flex items-center justify-center',
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
      {count && (
        <div
          className={cx('filter-input-checkbox__count font-s text-s', countClassName, {
            'text-BLACK/40': disabled
          })}>
          ({count})
        </div>
      )}
    </div>
  )
}

export default InputCheckbox
