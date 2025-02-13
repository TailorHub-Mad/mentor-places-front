'use client'

import type { IContentCardData } from '@components/ContentCard/ContentCard'
import ContentCard, { ContentCardVariant } from '@components/ContentCard/ContentCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import useBreakpoint from '@hooks/useBreakpoint'
import type { FC } from 'react'

interface IHomeArticlesProps {
  items: IContentCardData[]
  title: string
}

const HomeArticles: FC<IHomeArticlesProps> = ({ items, title }) => {
  const { isMobile } = useBreakpoint()

  return (
    <CustomSwiper
      position={SwiperNavigationPosition.TOP_RIGHT}
      swiperOptions={{
        slidesPerView: isMobile ? 1 : 2,
        spaceBetween: 24
      }}
      text={title}
      items={items.map((elm, idx) => {
        return (
          <ContentCard
            key={`${idx}-blog-post`}
            {...{
              data: elm,
              variant: ContentCardVariant.BLOG_POST_TEXT
            }}
          />
        )
      })}
    />
  )
}

export default HomeArticles
