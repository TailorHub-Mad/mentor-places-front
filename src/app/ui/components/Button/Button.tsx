import { cx } from '@utils/cx'
import React, { forwardRef, type FC } from 'react'

const buttonVariants = {
  base: cx('px-[24px] py-[8px]', 'transition-colors duration-200 ease-in-out', 's', 'rounded-full'),
  variant: {
    primary: cx('bg-BLACK hover:bg-WHITE text-WHITE hover:text-BLACK'),
    secondary: cx('bg-WHITE hover:bg-BLACK text-BLACK hover:text-WHITE', 'shadow-button')
  }
}

export type variantButtons = keyof typeof buttonVariants.variant

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: variantButtons
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', children, ...rest }, ref) => {
  return (
    <button ref={ref} className={cx(buttonVariants.base, buttonVariants.variant[variant])} {...rest}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button as FC<ButtonProps>
