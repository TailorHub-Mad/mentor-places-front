import { cx } from '@utils/cx'
import { type FC } from 'react'
import type { IMuralCard } from '../MuralCard'
import useBreakpoint from '@hooks/useBreakpoint'

export interface ITextMuralCardProps {
  type: 'text'
  title: string
  color: string
  backgroundColor: string
  text?: string
}

const TextMuralCard: FC<ITextMuralCardProps & IMuralCard> = ({ title, color, backgroundColor, text, width, height }) => {
  const { isMobile, isVerticalTablet } = useBreakpoint()
  const showText = text && (isMobile || isVerticalTablet)

  return (
    <div
      className={cx('rounded-lg h-full w-full p-6 flex', {
        'flex-col justify-between': showText,
        'items-center justify-center': !showText
      })}
      style={{ backgroundColor, color, width, height }}>
      <p
        className={cx('text-m-mobile font-m-mobile lg:text-m lg:font-m max-w-[76%]', {
          'text-center': !showText
        })}>
        {title}
      </p>
      {showText && <p className="text-s-mobile font-s-mobile lg:text-s lg:font-s opacity-70">{text}</p>}
    </div>
  )
}

export default TextMuralCard
