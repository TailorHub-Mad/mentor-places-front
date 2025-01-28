'use client'

import ShowMoreButton from '@components/ShowMoreButton'
import { useState, type FC } from 'react'

export interface IListContentItem {
  title: string
  description: string
}

export interface IListContentProps {
  list: IListContentItem[]
  initiallyShown?: number
}

const ListContent: FC<IListContentProps> = ({ list, initiallyShown = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {list.slice(0, isExpanded ? list.length : initiallyShown).map((elm, idx) => {
        const isLast = list.length - 1 === idx
        const isFirst = idx === 0

        return (
          <div key={`${elm.title}-${idx}`}>
            <p className="m" style={{ marginTop: isFirst ? 0 : 24 }}>
              {elm.title}
            </p>
            <p className="s mt-2 text-BLACK/60">{elm.description}</p>
            {!isLast && <hr className="h-[1px} border-BLACK/10 mt-5" />}
          </div>
        )
      })}
      {list.length > initiallyShown && <ShowMoreButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />}
    </>
  )
}

export default ListContent
