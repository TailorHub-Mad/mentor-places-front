'use client'

import type { IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import AssetCardIndex from '@components/AssetCardIndex/AssetCardIndex'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import useBreakpoint from '@hooks/useBreakpoint'
import type { FC } from 'react'

interface IUserFavoritesProps {
  items: IAssetCardIndexProps[]
  title: string
}

const UserFavorites: FC<IUserFavoritesProps> = ({ items, title }) => {
  const { isMobile } = useBreakpoint()

  return (
    <CustomSwiper
      position={SwiperNavigationPosition.TOP_RIGHT}
      swiperOptions={{
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: 24
      }}
      text={title}
      items={items.map((elm, idx) => {
        return <AssetCardIndex key={`${idx}-user-favorites`} {...elm} isOnFavPage />
      })}
    />
  )
}

export default UserFavorites
