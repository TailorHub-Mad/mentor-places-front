import { cx } from '@utils/cx'
import React, { forwardRef, type FC } from 'react'
import Link from 'next/link'

const buttonVariants = {
  base: cx('px-[24px] py-[8px]', 'transition-colors duration-200 ease-in-out', 's', 'rounded-full'),
  variant: {
    primary: cx('bg-BLACK hover:bg-WHITE text-WHITE hover:text-BLACK'),
    secondary: cx('bg-WHITE hover:bg-BLACK text-BLACK hover:text-WHITE', 'shadow-button'),
    text: cx('underline text-BLACK hover:text-BLACK/50 underline-offset-4')
  }
}

export type variantButtons = keyof typeof buttonVariants.variant

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: variantButtons
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', href, children, ...rest }, ref) => {
  if (href)
    return (
      <Link href={href} className={cx(buttonVariants.base, buttonVariants.variant[variant])}>
        {children}
      </Link>
    )

  return (
    <button ref={ref} className={cx(buttonVariants.base, buttonVariants.variant[variant])} {...rest}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button as FC<ButtonProps>
