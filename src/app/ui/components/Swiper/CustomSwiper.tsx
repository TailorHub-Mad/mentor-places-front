import React, { ReactNode, FC } from 'react'
import { Swiper as SwiperCore, SwiperSlide as SwiperCoreSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

export interface CustomSwiperProps {
  items: ReactNode[]
  swiperOptions?: SwiperOptions
}

const CustomSwiper: FC<CustomSwiperProps> = ({ items, swiperOptions }) => {
  return (
    <SwiperCore modules={[Navigation]} {...swiperOptions}>
      {items?.map((item, index) => <SwiperCoreSlide key={index}>{item}</SwiperCoreSlide>)}
    </SwiperCore>
  )
}

export default CustomSwiper
