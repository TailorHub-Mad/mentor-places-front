import type { SVGProps } from 'react'

const ArrowUp = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.63281 12L6.63281 1.00213" stroke="black" strokeWidth="0.971472" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.99819 6.5L6.628 1.00106L12.2578 6.5" stroke="black" strokeWidth="0.971472" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ArrowUp
