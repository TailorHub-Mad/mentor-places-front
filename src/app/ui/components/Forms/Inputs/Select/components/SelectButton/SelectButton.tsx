import React, { forwardRef, type RefObject } from 'react'
import ChevronArrowDown from '@components/icons/ChevronArrowDown'
import { cx } from '@utils/cx'

interface SelectButtonProps {
  disabled: boolean
  isOpen: boolean
  isOverflowing: boolean
  placeholder?: string
  label?: string
  onClick: () => void | undefined
  parentRef: RefObject<HTMLDivElement>
  spanRef: RefObject<HTMLSpanElement>
}

const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ disabled, isOpen, isOverflowing, placeholder, label, onClick, parentRef, spanRef }, ref) => {
    return (
      <button
        ref={ref}
        className={cx('px-[14px] py-[8px] bg-GRAY rounded-[8px] w-auto max-w-full flex items-center justify-between', {
          'cursor-not-allowed': disabled
        })}
        onClick={disabled ? undefined : onClick}>
        <div ref={parentRef} className="select-input__label-wrapper overflow-hidden max-w-full relative">
          <span
            ref={spanRef}
            className={cx('mr-4 text-nowrap', {
              'opacity-40': disabled
            })}>
            {label || placeholder}
          </span>
          {isOverflowing && <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-GRAY/0 to-GRAY" />}
        </div>
        <ChevronArrowDown
          className={cx({
            'rotate-180': isOpen
          })}
        />
      </button>
    )
  }
)

SelectButton.displayName = 'SelectButton'

export default SelectButton
