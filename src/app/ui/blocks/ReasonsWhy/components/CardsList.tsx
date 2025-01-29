import ContentCard, { ContentCardVariant, IContentCardData } from '@components/ContentCard/ContentCard'
import type { FC } from 'react'

interface ICardsListProps {
  cards: IContentCardData[]
}

const CardsList: FC<ICardsListProps> = ({ cards }) => {
  return cards.map((card) => {
    return <ContentCard variant={ContentCardVariant.INFO_CARD_NUMBER} data={card} key={card.infoHeaderTitle} />
  })
}

export default CardsList
