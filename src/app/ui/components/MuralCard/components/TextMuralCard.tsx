import { cx } from '@utils/cx'
import { type FC } from 'react'
import type { IMuralCard } from '../MuralCard'

export interface ITextMuralCardProps {
  type: 'text'
  title: string
  color: string
  backgroundColor: string
  text?: string
}

const TextMuralCard: FC<ITextMuralCardProps & IMuralCard> = ({ title, color, backgroundColor, text, width, height }) => {
  return (
    <div
      className={cx('rounded-lg h-full w-full p-6 flex', {
        'flex-col justify-between': text,
        'items-center justify-center': !text
      })}
      style={{ backgroundColor, color, width, height }}>
      <p
        className={cx('text-m-mobile font-m-mobile lg:text-m lg:font-m', {
          'text-center': !text
        })}>
        {title}
      </p>
      {text && <p className="text-s-mobile font-s-mobile lg:text-s lg:font-s opacity-70">{text}</p>}
    </div>
  )
}

export default TextMuralCard
