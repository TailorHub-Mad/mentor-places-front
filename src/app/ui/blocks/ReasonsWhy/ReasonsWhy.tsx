import type { IContentCardData } from '@components/ContentCard/ContentCard'
import ContentCard, { ContentCardVariant } from '@components/ContentCard/ContentCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import useBreakpoint from '@hooks/useBreakpoint'
import type { FC } from 'react'

interface IReasonsWhyProps {
  title: string
  cards: IContentCardData[]
}

const ReasonsWhy: FC<IReasonsWhyProps> = ({ title, cards }) => {
  const { isMobile } = useBreakpoint()
  return isMobile ? (
    <div className="flex flex-col gap-5">
      <h3 className="s">{title}</h3>
      {cards.map((card) => {
        return <ContentCard variant={ContentCardVariant.INFO_CARD_NUMBER} data={card} key={card.infoHeaderTitle} />
      })}
    </div>
  ) : (
    <CustomSwiper
      text={title}
      swiperOptions={{
        navigation: false,
        slidesPerView: 2,
        spaceBetween: 24
      }}
      position={SwiperNavigationPosition.TOP_RIGHT}
      items={cards.map((card) => {
        return <ContentCard variant={ContentCardVariant.INFO_CARD_NUMBER} data={card} key={card.infoHeaderTitle} />
      })}
    />
  )
}

export default ReasonsWhy
