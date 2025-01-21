'use client'

import EyeOff from '@components/icons/EyeOff'
import EyeOn from '@components/icons/EyeOn'
import { EColor } from '@theme/foundations/colors.foundations'
import { cx } from '@utils/cx'
import type { InputHTMLAttributes } from 'react'
import { useState, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, type, className, ...props }, ref) => {
  const [typeState, setTypeState] = useState(type)

  const isPassword = type === 'password'

  return (
    <>
      <div className={cx('relative', className)}>
        <input
          type={isPassword ? typeState : type}
          className={cx('w-full border-b pb-2 border-BLACK_10 outline-none placeholder-BLACK_60 s', { 'border-RED': error })}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <div className={cx('absolute bottom-0 right-0 flex h-full items-center justify-center')}>
            <button
              aria-label="Change password visibility"
              type="button"
              onClick={() => {
                setTypeState(typeState === 'password' ? 'text' : 'password')
              }}>
              {typeState === 'password' ? <EyeOff width={17} color={EColor.BLACK_40} /> : <EyeOn width={17} color={EColor.BLACK_40} />}
            </button>
          </div>
        )}
      </div>
      {error && <p className="text-RED s">{error}</p>}
    </>
  )
})

Input.displayName = 'Input'

export default Input
