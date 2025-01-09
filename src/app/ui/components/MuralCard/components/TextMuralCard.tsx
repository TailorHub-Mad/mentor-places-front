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
    <div className="rounded-lg h-80 w-56 p-6" style={{ backgroundColor, color }}>
      {text ? (
        <div className="h-full flex flex-col justify-between">
          <p className="font-l-mobile lg:font-l">{title}</p>
          {text && <p className="font-m-mobile lg:font-m opacity-70">{text}</p>}
        </div>
      ) : (
        <div className="h-full flex items-center justify-center">
          <p className="font-l-mobile lg:font-l text-center">{title}</p>
        </div>
      )}
    </div>
  )
}

export default TextMuralCard
