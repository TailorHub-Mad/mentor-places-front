import type { SVGProps } from 'react'

const LocationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_17967_11184)">
        <path
          d="M20.8675 10.5253C20.8675 17.3103 12.144 23.126 12.144 23.126C12.144 23.126 3.42041 17.3103 3.42041 10.5253C3.42041 8.21167 4.3395 5.99281 5.97548 4.35682C7.61146 2.72084 9.83033 1.80176 12.144 1.80176C14.4576 1.80176 16.6764 2.72084 18.3124 4.35682C19.9484 5.99281 20.8675 8.21167 20.8675 10.5253Z"
          stroke="black"
          strokeWidth="1.93857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1427 13.4339C13.7487 13.4339 15.0506 12.132 15.0506 10.526C15.0506 8.92005 13.7487 7.61816 12.1427 7.61816C10.5368 7.61816 9.23486 8.92005 9.23486 10.526C9.23486 12.132 10.5368 13.4339 12.1427 13.4339Z"
          stroke="black"
          strokeWidth="1.93857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_17967_11184">
          <rect width="24" height="24" fill="white" transform="translate(0.55127 0.301758)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LocationIcon
