import { type FC } from 'react'
import ConditionalLink from '@components/ConditionalLink/ConditionalLink'
import { cx } from '@utils/cx'

interface ContentTagProps {
  title: string
  href?: string
  disabled?: boolean
  className?: string
}

const ContentTag: FC<ContentTagProps> = (props) => {
  const { href, title, disabled, className } = props

  return (
    <ConditionalLink className={cx('content-tag', className)} href={href} disabled={disabled}>
      <span
        className={cx(
          'px-[24px] py-[8px] text-WHITE font-s rounded-[8px] text-nowrap hover:bg-BLUE/60',
          disabled ? 'bg-BLUE/60' : 'bg-BLUE'
        )}>
        {title}
      </span>
    </ConditionalLink>
  )
}

export default ContentTag
