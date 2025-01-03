import Link from 'next/link'
import React from 'react'
import { cx } from '@utils/cx'

type Props = {
  href?: string
  children: React.ReactNode
  className?: string
}

export const ConditionalLink: React.FC<Props> = ({ href, children, className }) => {
  if (!href) {
    return <span className={cx(className)}>{children}</span>
  }

  return (
    <Link href={href} className={cx(className)}>
      {children}
    </Link>
  )
}
