import type { SVGProps } from 'react'

const AwardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.8379 4.77832H4.83789C3.73332 4.77832 2.83789 5.67375 2.83789 6.77832V20.7783C2.83789 21.8829 3.73332 22.7783 4.83789 22.7783H18.8379C19.9425 22.7783 20.8379 21.8829 20.8379 20.7783V6.77832C20.8379 5.67375 19.9425 4.77832 18.8379 4.77832Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.8379 2.77832V6.77832" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.83789 2.77832V6.77832" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.83789 10.7783H20.8379" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default AwardIcon
