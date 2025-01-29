import type { IContentCardData } from '@components/ContentCard/ContentCard'
import ContentCard, { ContentCardVariant } from '@components/ContentCard/ContentCard'
import type { FC } from 'react'

interface IReasonsWhyProps {
  title: string
  cards: IContentCardData[]
}

const ReasonsWhy: FC<IReasonsWhyProps> = ({ title, cards }) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="s">{title}</h3>
      {cards.map((card) => {
        return <ContentCard variant={ContentCardVariant.INFO_CARD_NUMBER} data={card} key={card.infoHeaderTitle} />
      })}
    </div>
  )
}

export default ReasonsWhy
