import { FC } from 'react'
import ConditionalLink from '@components/ConditionalLink/ConditionalLink'
import { cx } from '@utils/cx'

interface ContentTagProps {
  title: string
  href?: string
}

const ContentTag: FC<ContentTagProps> = (props) => {
  const { href, title } = props

  return (
    <ConditionalLink className="content-tag" href={href}>
      <span className={cx('px-[24px] py-[8px] text-WHITE font-s rounded-[8px] text-nowrap', 'bg-BLUE hover:bg-BLUE/60')}>{title}</span>
    </ConditionalLink>
  )
}

export default ContentTag
