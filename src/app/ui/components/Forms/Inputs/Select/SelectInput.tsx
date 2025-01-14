import { type FC, useEffect, useRef, useState } from 'react'
import ChevronArrowDown from '@components/icons/ChevronArrowDown'
import { cx } from '@utils/cx'

interface ISelectOption {
  value: string
  label: string
}

export interface ISelectInputProps {
  placeholder?: string
  options: ISelectOption[]
  onChange: (value: string | undefined) => void
}

const SelectInput: FC<ISelectInputProps> = ({ options, placeholder, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [valueSelected, setValueSelected] = useState<ISelectOption | undefined>(undefined)

  const [isOverflowing, setIsOverflowing] = useState(false)

  const spanRef = useRef<HTMLSpanElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (spanRef.current && parentRef.current) {
        const spanWidth = spanRef.current.offsetWidth
        const parentWidth = parentRef.current.offsetWidth
        setIsOverflowing(spanWidth > parentWidth) // Check if span is wider than parent
      }
    }

    checkOverflow() // Initial check

    // Add a listener if dimensions might change on resize
    const observer = new ResizeObserver(checkOverflow)
    if (parentRef.current) {
      observer.observe(parentRef.current)
    }

    // Cleanup observer on unmount
    return () => observer.disconnect()
  }, [valueSelected?.label, placeholder])

  const handleSetInputValue = (option: ISelectOption) => {
    if (option.value === valueSelected?.value) {
      setValueSelected(undefined)
      onChange(undefined)
      setIsDropdownOpen(false)

      return
    }

    setValueSelected(option)
    onChange(option.value)
    setIsDropdownOpen(false)
  }

  const handleIsDropdownOpen = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className="select-input__wrapper">
      <button
        className="px-[14px] py-[8px] bg-GRAY rounded-[8px] w-auto max-w-full flex items-center justify-between"
        onClick={handleIsDropdownOpen}>
        <div ref={parentRef} className="select-input__label-wrapper overflow-hidden max-w-full relative">
          <span ref={spanRef} className="mr-4 text-nowrap">
            {valueSelected?.label ?? placeholder}
          </span>
          {isOverflowing && <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-GRAY/0 to-GRAY"></div>}
        </div>
        <ChevronArrowDown
          className={cx({
            'rotate-180': isDropdownOpen
          })}
        />
      </button>
      {options?.length > 0 && isDropdownOpen && (
        <div className="select-input__dropdown flex flex-col w-full md:w-min max-w-full px-[9px] py-[5px] bg-WHITE shadow rounded-[8px] mt-[9px]">
          {options.map((option, index) => (
            <button
              key={`select-input__dropdown-${option.value}-${index}`}
              className={cx('select-input__option text-justify py-[6px] px-[4px]', {
                'border-b border-BLACK/20': index !== options.length - 1,
                'bg-BLACK/30': option.value === valueSelected?.value,
                'hover:bg-GRAY': option.value !== valueSelected?.value
              })}
              onClick={() => handleSetInputValue(option)}>
              <span
                className={cx('md:text-nowrap font-s text-s text-BLACK ', {
                  'opacity-60': option.value !== valueSelected?.value
                })}>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectInput
