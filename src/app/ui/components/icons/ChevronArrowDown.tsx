import React, { type FC } from 'react'

const ChevronArrowDown: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.6065 0.773437L8.00001 7.22631L1.39355 0.773438"
        stroke="black"
        strokeOpacity="0.6"
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronArrowDown
