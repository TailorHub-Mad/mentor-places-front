import { cx } from '@utils/cx'
import { type FC } from 'react'

export interface ITextMuralCardProps {
  type: 'text'
  title: string
  color: string
  backgroundColor: string
  text?: string
}

const TextMuralCard: FC<ITextMuralCardProps> = ({ title, color, backgroundColor, text }) => {
  return (
    <div
      className={cx('rounded-lg h-[535px] w-[322px] p-6 flex', {
        'flex-col justify-between': text,
        'items-center justify-center': !text
      })}
      style={{ backgroundColor, color }}>
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
