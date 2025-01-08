import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'
import { cx } from '@utils/cx'

type Props = {
  href?: string
  className?: string
  disabled?: boolean
}

const ConditionalLink: FC<PropsWithChildren<Props>> = (props) => {
  const { href, className, children, disabled } = props
  if (!href || disabled) {
    return (
      <span
        className={cx(className, {
          'cursor-not-allowed ': disabled && href
        })}>
        {children}
      </span>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default ConditionalLink
