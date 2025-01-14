import React, { type FC } from 'react'

const ChevronArrowLeft: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.33203 14.6693L0.665365 8.0026L7.33203 1.33594"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronArrowLeft
