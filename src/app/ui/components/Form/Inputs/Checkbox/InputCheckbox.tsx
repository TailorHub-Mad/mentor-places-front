import type { FC, ReactNode } from 'react'
import { cx } from '@utils/cx'
import type { ICheckboxInputProps } from '@components/Checkbox'
import CheckboxInput from '@components/Checkbox'

import { type IFilterSelection } from '@interfaces/filterSidebar.interfaces'

export interface IInputCheckboxProps extends ICheckboxInputProps {
  id: string
  value?: string
  label: string | ReactNode // Support string or custom JSX for the label
  checked: boolean
  onChange: (value: IFilterSelection) => void
  count?: number
  disabled?: boolean
  className?: string
  inputClassName?: string
  labelClassName?: string
  countClassName?: string
}

const InputCheckbox: FC<IInputCheckboxProps> = ({
  id,
  value,
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
  const handleIsChecked = () => {
    onChange({ id, value: value || id, label: typeof label === 'string' ? label : id })
  }

  return (
    <div className={cx('filter-input-checkbox flex items-center justify-between', className)}>
      <CheckboxInput
        id={id}
        label={label}
        checked={checked}
        onChange={handleIsChecked}
        disabled={disabled}
        inputClassName={inputClassName}
        labelClassName={labelClassName}
      />
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
