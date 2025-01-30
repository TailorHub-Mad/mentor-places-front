import type { FC, SVGProps } from 'react'

const FullStarIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.0013 1.66406L12.5763 6.88073L18.3346 7.7224L14.168 11.7807L15.1513 17.5141L10.0013 14.8057L4.8513 17.5141L5.83464 11.7807L1.66797 7.7224L7.4263 6.88073L10.0013 1.66406Z"
        fill="black"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default FullStarIcon
