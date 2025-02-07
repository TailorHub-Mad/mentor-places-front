import ContentBlock from '@components/ContentBlock/ContentBlock'
import type { TCTAAction } from '@hooks/useAction'
import type { FC } from 'react'
import ListContent, { type IListContentItem } from '@components/ListContent/ListContent'
import StringToRichText from '@components/StringToRichText/StringToRichText'

export interface IColumnContentProps {
  columnTitle: {
    theme: 'light' | 'dark'
    title: string
    text?: string
    cta?: string
    action?: TCTAAction
    href?: string
  }
  columnContent: {
    list?: IListContentItem[]
    richText?: string
    maxLinesShown?: number
  }
}

const ColumnContent: FC<IColumnContentProps> = ({ columnTitle, columnContent }) => {
  return (
    <div className="column-content-block grid grid-cols-1 md:grid-cols-2 md:flex-row gap-10 md:gap-5">
      <div className="column-content-block__title">
        <ContentBlock {...columnTitle} />
      </div>
      <div className="column-content-block__content flex flex-col gap-3 items-start">
        {columnContent?.richText && <StringToRichText text={columnContent.richText} className="text-BLACK/80" />}
        {columnContent?.list && <ListContent list={columnContent.list} initiallyShown={columnContent?.maxLinesShown} />}
      </div>
    </div>
  )
}

export default ColumnContent
