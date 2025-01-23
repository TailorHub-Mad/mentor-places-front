'use client'

import ShowMoreButton from '@components/ShowMoreButton'
import { useState, type FC } from 'react'

interface IListContentProps {
  list: { title: string; description: string }[]
}

const INITIALLY_SHOWN = 3

const ListContent: FC<IListContentProps> = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {list.slice(0, isExpanded ? list.length : INITIALLY_SHOWN).map((elm, idx) => {
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
      {list.length > INITIALLY_SHOWN && <ShowMoreButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />}
    </>
  )
}

export default ListContent
