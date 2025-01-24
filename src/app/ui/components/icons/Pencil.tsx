import type { SVGProps } from 'react'

const PencilIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_17934_8177)">
        <path
          d="M12.041 2.12586C12.2271 1.93983 12.4479 1.79225 12.691 1.69157C12.9341 1.59088 13.1946 1.53906 13.4577 1.53906C13.7208 1.53906 13.9813 1.59088 14.2244 1.69157C14.4674 1.79225 14.6883 1.93983 14.8743 2.12586C15.0604 2.3119 15.208 2.53277 15.3086 2.77584C15.4093 3.01891 15.4612 3.27943 15.4612 3.54253C15.4612 3.80563 15.4093 4.06615 15.3086 4.30923C15.208 4.5523 15.0604 4.77316 14.8743 4.9592L5.31185 14.5217L1.41602 15.5842L2.47852 11.6884L12.041 2.12586Z"
          stroke={props.color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_17934_8177">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PencilIcon
