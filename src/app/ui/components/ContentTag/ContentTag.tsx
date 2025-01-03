import { FC } from 'react'
import { ConditionalLink } from '@components/ConditionalLink/ConditionalLink'
import { cx } from '@utils/cx'

interface ContentTagProps {
  href?: string
  title?: string
}

export const ContentTag: FC<ContentTagProps> = (props) => {
  const { href, title } = props || {}

  return (
    <ConditionalLink className="content-tag" href={href}>
      <span className={cx('px-[24px] py-[8px] text-WHITE font-s rounded-[8px]', 'bg-BLUE hover:bg-BLUE/60')}>{title}</span>
    </ConditionalLink>
  )
}
