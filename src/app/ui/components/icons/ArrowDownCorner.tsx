import type { SVGProps } from 'react'

const ArrowDownCorner = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.2793 5.72217L13.6572 13.1884" stroke="black" strokeWidth="2.59389" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.47785 14.6411L13.988 13.5697L13.9531 3.10107"
        stroke="black"
        strokeWidth="2.59389"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDownCorner
