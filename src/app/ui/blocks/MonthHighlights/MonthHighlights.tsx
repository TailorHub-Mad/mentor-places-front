'use client'

import AssetCard, { type IAssetCardProps } from '@components/AssetCard/AssetCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import type { FC } from 'react'

type TItem = IAssetCardProps & { image: string }

export interface IMonthHighlightsProps {
  title: string
  items: TItem[]
}

const MonthHighlights: FC<IMonthHighlightsProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col">
      <CustomSwiper
        text={title}
        swiperOptions={{
          navigation: false
        }}
        position={SwiperNavigationPosition.TOP_RIGHT}
        items={items.map((elm, idx) => {
          return (
            <div
              key={`${elm.data.title}-${idx}`}
              className="flex justify-end p-10 rounded-lg"
              style={{ backgroundImage: `url(${elm.image})`, width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <AssetCard
                {...{
                  variant: elm.variant,
                  data: elm.data
                }}
              />
            </div>
          )
        })}
      />
    </div>
  )
}

export default MonthHighlights
