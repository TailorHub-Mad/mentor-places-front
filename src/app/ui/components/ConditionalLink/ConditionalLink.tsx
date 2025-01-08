import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

type Props = {
  href?: string
  className?: string
}

const ConditionalLink: FC<PropsWithChildren<Props>> = ({ href, children, className }) => {
  if (!href) {
    return <span className={className}>{children}</span>
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default ConditionalLink
