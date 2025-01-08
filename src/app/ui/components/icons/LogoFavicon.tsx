import type { FC, SVGProps } from 'react'

interface LogoFaviconProps extends SVGProps<SVGSVGElement> {
  strokeBg?: 'white' | 'black'
}

export const LogoFavicon: FC<LogoFaviconProps> = (props) => {
  const { strokeBg, ...restProps } = props

  return (
    <svg width="242" height="194" viewBox="0 0 242 194" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path
        d="M44.1758 8.08984L114.166 70.3026"
        stroke={strokeBg || 'white'}
        stroke-width="16.943"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.6491 83.0035L116.955 73.5469L116.109 -14.2656"
        stroke={strokeBg || 'white'}
        stroke-width="16.943"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M197.885 143.246L129.167 82.1645"
        stroke={strokeBg || 'white'}
        stroke-width="16.943"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M213.57 70.7817L126.264 80.2382L127.109 168.051"
        stroke={strokeBg || 'white'}
        stroke-width="16.943"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
