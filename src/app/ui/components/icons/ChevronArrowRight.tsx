import React, { FC } from 'react'

const ChevronArrowRight: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.667969 14.6693L7.33464 8.0026L0.667969 1.33594"
        stroke="black"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default ChevronArrowRight
