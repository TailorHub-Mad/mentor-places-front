import type { SVGProps } from 'react'

const MedalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 19C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19Z"
        stroke="black"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.21 17.8889L11 26.9989L16 23.9989L21 26.9989L19.79 17.8789"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MedalIcon
