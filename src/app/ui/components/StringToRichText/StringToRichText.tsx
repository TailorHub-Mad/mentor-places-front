import { cx } from '@utils/cx'
import type { FC } from 'react'

interface IStringToRichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

const StringToRichText: FC<IStringToRichTextProps> = ({ text, className }) => {
  return (
    <div className={cx('leading-[28px]', className)}>
      {text.split('\n').reduce<JSX.Element[]>((acc, paragraph, index) => {
        if (!paragraph.trim()) return acc // Skip empty lines

        const formattedText = paragraph
          .split(/\*\*(.*?)\*\*/g)
          .map((part, idx) => (idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part))

        acc.push(
          <p key={index} className={cx(index !== 0 && 'mt-3')}>
            {formattedText}
          </p>
        )

        return acc
      }, [])}
    </div>
  )
}

export default StringToRichText
