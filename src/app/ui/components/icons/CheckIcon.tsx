import type { FC, SVGProps } from 'react'

interface ICheckIconProps extends SVGProps<SVGSVGElement> {
  strokeBg?: 'white' | 'black'
}

const CheckIcon: FC<ICheckIconProps> = (props) => {
  const { strokeBg = 'white', ...restProps } = props

  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path d="M1 3.99967L3.66667 6.66634L9 1.33301" stroke={strokeBg} strokeLinecap="square" />
    </svg>
  )
}

export default CheckIcon
