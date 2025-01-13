import type { ChangeEvent, FC, ReactNode } from 'react'
import { cx } from '@utils/cx'

export interface IFilterInputCheckboxProps {
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
      <div className={cx('filter-input-checkbox__input', inputClassName)}>
        <input id={id} type="checkbox" checked={checked} onChange={handleIsChecked} disabled={disabled} />
        <label htmlFor={id} className={cx('', labelClassName)}>
          {label}
        </label>
      </div>
      {count && <div className={cx('filter-input-checkbox__count', countClassName)}>({count})</div>}
    </div>
  )
}

export default FilterInputCheckbox
