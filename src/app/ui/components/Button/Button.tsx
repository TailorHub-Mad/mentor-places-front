import { cx } from '@utils/cx'
import { forwardRef, type FC } from 'react'

const buttonVariants = {
  base: cx('px-8 xy-24', 'transition-colors duration-200 ease-in-out', 's', 'rounded-full'),
  variant: {
    primary: cx('bg-BLACK hover:bg-WHITE text-WHITE hover:text-BLACK'),
    secondary: cx('bg-WHITE hover:bg-BLACK text-BLACK hover:text-WHITE', 'shadow-[0_px_4px_4px_0px_#0000000D]')
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
