import { type FC } from 'react'
import ConditionalLink from '@components/ConditionalLink/ConditionalLink'
import { cx } from '@utils/cx'
import { EColor } from '@theme/foundations/colors.foundations'

interface ContentTagProps {
  title: string
  href?: string
  disabled?: boolean
  className?: string
  bgColor?: string
  textColor?: string
}

const ContentTag: FC<ContentTagProps> = ({ href, title, disabled, bgColor, textColor }) => {
  return (
    <ConditionalLink className="content-tag" href={href} disabled={disabled}>
      <span
        className={cx('px-[24px] py-[8px] font-s rounded-[8px] text-nowrap hover:opacity-60', {
          'opacity-60': disabled,
          'cursor-pointer hover:bg-BLUE/60': href
        })}
        style={{ backgroundColor: bgColor || EColor.BLUE, color: textColor || EColor.WHITE }}>
        {title}
      </span>
    </ConditionalLink>
  )
}

export default ContentTag
