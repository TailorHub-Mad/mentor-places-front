import type { ChangeEvent, FC } from 'react'
import { cx } from '@utils/cx'
import type { ICheckboxInputProps } from '@components/Checkbox'
import CheckboxInput from '@components/Checkbox'

export interface IFilterInputCheckboxProps extends ICheckboxInputProps {
  checked: boolean
  onChange: (id: string, checked: boolean) => void
  count?: number
  disabled?: boolean
  className?: string
  countClassName?: string
}

const FilterInputCheckbox: FC<IFilterInputCheckboxProps> = ({
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

export default FilterInputCheckbox
