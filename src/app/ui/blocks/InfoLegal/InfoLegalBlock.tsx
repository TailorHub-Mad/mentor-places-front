import type { FC } from 'react'

export interface IInfoLegalBlockProps {
  title: string
  content: string // html
}

const InfoLegalBlock: FC<IInfoLegalBlockProps> = ({ content, title }) => {
  return (
    <div className="info-legal-block grid grid-cols-1 md:grid-cols-6 gap-6">
      <div className="info-legal-block__title md:col-span-2">
        <h1 className="font-xl text-xl leading-xl-mobile">{title}</h1>
      </div>
      <div
        className="info-legal-block__content rich-text md:col-span-4"
        dangerouslySetInnerHTML={{
          __html: content
        }}></div>
    </div>
  )
}

export default InfoLegalBlock
