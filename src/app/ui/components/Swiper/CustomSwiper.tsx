'use client'

import type { ReactNode } from 'react'
import React, { type FC } from 'react'
import { Swiper as SwiperCore, SwiperSlide as SwiperCoreSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import SwiperNavigation, { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import { cx } from '@utils/cx'
import { useStableUUIDs } from '@hooks/useStableUUIDs'
import useBreakpoint from '@hooks/useBreakpoint'

export interface CustomSwiperProps {
  items: ReactNode[]
  swiperOptions?: SwiperOptions
  position?: SwiperNavigationPosition
  className?: string
  text?: string
}

const CustomSwiper: FC<CustomSwiperProps> = ({ items, swiperOptions, className, position = SwiperNavigationPosition.DEFAULT, text }) => {
  const { isMobile } = useBreakpoint()

  // create unique key for the loop
  const itemKeys = useStableUUIDs(items)
  return (
    <div className={cx('custom-swiper-container relative', className)}>
      {isMobile && position === SwiperNavigationPosition.TOP_RIGHT && <p className="text-l-mobile font-l-mobile">{text}</p>}
      <SwiperCore modules={[Navigation]} {...swiperOptions}>
        {items?.map((item, index) => {
          return (
            <SwiperCoreSlide
              className={cx({
                'pt-14': position === SwiperNavigationPosition.TOP_RIGHT || position === SwiperNavigationPosition.TOP_LEFT,
                'pt-24':
                  (position === SwiperNavigationPosition.TOP_RIGHT || position === SwiperNavigationPosition.TOP_LEFT) && text && !isMobile,
                'pb-14': position === SwiperNavigationPosition.BOTTOM_RIGHT || position === SwiperNavigationPosition.BOTTOM_LEFT
              })}
              key={itemKeys[index]}>
              {item}
            </SwiperCoreSlide>
          )
        })}
        <SwiperNavigation position={position} text={text} />
      </SwiperCore>
    </div>
  )
}

export default CustomSwiper
