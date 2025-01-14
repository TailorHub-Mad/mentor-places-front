import { type FC, useState } from 'react'

interface ISelectOption {
  value: string
  label: string
}

export interface ISelectInputProps {
  placeholder?: string
  options: ISelectOption[]
  onChange: (value: string) => void
}

const SelectInput: FC<ISelectInputProps> = ({ options, placeholder, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSetInputValue = (value: string) => {
    onChange(value)
  }

  const handleIsDropdownOpen = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className="select-input__wrapper">
      <button className="px-4 py-1 bg-WHITE shadow" onClick={handleIsDropdownOpen}>
        {placeholder}
      </button>
      {options?.length > 0 && isDropdownOpen && (
        <div className="select-input__dropdown flex flex-col gap-4 px-3 py-5 bg-WHITE shadow">
          {options.map((option, index) => (
            <div
              key={`select-input__dropdown-${option.value}-${index}`}
              className="select-input__option py-5 px-2 border-b border-BLACK/40"
              onClick={() => handleSetInputValue(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectInput
