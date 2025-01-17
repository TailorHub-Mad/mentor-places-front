'use client'

import EyeOff from '@components/icons/EyeOff'
import EyeOn from '@components/icons/EyeOn'
import { EColor } from '@theme/foundations/colors.foundations'
import { cx } from '@utils/cx'
import type { InputHTMLAttributes, FC } from 'react'
import { useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const Input: FC<InputProps> = ({ hasError, type }) => {
  const [typeState, setTypeState] = useState(type)

  const isPassword = type === 'password'

  return (
    <div className="relative">
      <input
        type={isPassword ? typeState : type}
        className={cx('w-full border-b pb-2 border-BLACK_10 outline-none placeholder-BLACK_60 s', { 'border-RED': hasError })}
        placeholder="placeholder"
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
  )
}

export default Input
