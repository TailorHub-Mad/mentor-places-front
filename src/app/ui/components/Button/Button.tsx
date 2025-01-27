import { cx } from '@utils/cx'
import React, { forwardRef, type FC } from 'react'
import Link from 'next/link'

const buttonVariants = {
  base: cx('py-[8px]', 'transition-colors duration-200 ease-in-out', 's', 'rounded-full', 'disabled:bg-GRAY disabled:text-BLACK_40'),
  variant: {
    primary: cx('bg-BLACK hover:bg-WHITE text-WHITE hover:text-BLACK px-[24px]'),
    secondary: cx('bg-WHITE hover:bg-BLACK text-BLACK hover:text-WHITE', 'shadow-button px-[24px]'),
    text: cx('underline text-BLACK hover:text-BLACK/50 underline-offset-4'),
    icon: cx('bg-GRAY_BG hover:bg-GRAY_BG/40 text-BLACK w-10 h-10 rounded-full flex items-center justify-center')
  }
}

export type variantButtons = keyof typeof buttonVariants.variant

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: variantButtons
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', href, children, className, ...rest }, ref) => {
  if (href)
    return (
      <Link href={href} className={cx(buttonVariants.base, buttonVariants.variant[variant], className)}>
        {children}
      </Link>
    )

  return (
    <button ref={ref} className={cx(buttonVariants.base, buttonVariants.variant[variant], className)} {...rest}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button as FC<ButtonProps>
