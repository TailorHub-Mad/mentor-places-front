import React, { ReactNode, type FC } from 'react'
import { Swiper as SwiperCore, SwiperSlide as SwiperCoreSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import SwiperNavigation from '@components/Swiper/components/SwiperNatigation'

export interface CustomSwiperProps {
  items: ReactNode[]
  swiperOptions?: SwiperOptions
}

const CustomSwiper: FC<CustomSwiperProps> = ({ items, swiperOptions }) => {
  return (
    <div className="custom-swiper-container relative">
      <SwiperCore modules={[Navigation]} {...swiperOptions}>
        {items?.map((item, index) => <SwiperCoreSlide key={index}>{item}</SwiperCoreSlide>)}
        <SwiperNavigation />
      </SwiperCore>
    </div>
  )
}

export default CustomSwiper
