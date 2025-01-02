import Link from 'next/link'
import React from 'react'

type Props = {
  href?: string
  children: React.ReactNode
}

export const ConditionalLink: React.FC<Props> = ({ href, children }) => {
  if (!href) {
    return <span>{children}</span>
  }

  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}
