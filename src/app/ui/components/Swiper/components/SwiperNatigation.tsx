import React, { FC, useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import ChevronArrowLeft from '@components/icons/ChevronArrowLeft'
import ChevronArrowRight from '@components/icons/ChevronArrowRight'
import { cx } from '@utils/cx'

const SwiperNavigation: FC = () => {
  const swiper = useSwiper()

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false
  })

  useEffect(() => {
    swiper.on('slideChange', (swipe) => {
      setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd })
    })
  }, [swiper])

  return (
    <div className="swiper-navigation__wrapper flex justify-center mt-4 gap-2">
      <div className="swiper-navigation__prev__wrapper lg:absolute lg:left-0 lg:inset-y-0 flex items-center z-50">
        <button
          onClick={() => swiper.slidePrev()}
          className={cx('swiper-navigation-prev p-[18px] bg-GRAY/40 rounded-full flex flex-col items-center justify-center', {
            'opacity-50': slideConfig.isBeginning
          })}
          disabled={slideConfig.isBeginning}>
          <ChevronArrowLeft className="absolute" />
        </button>
      </div>
      <div className="swiper-navigation__next__wrapper lg:absolute lg:right-0 lg:inset-y-0 flex items-center z-50">
        <button
          onClick={() => swiper.slideNext()}
          className={cx('swiper-navigation-next p-[18px] bg-GRAY/40 rounded-full flex flex-col items-center justify-center', {
            'opacity-50': slideConfig.isEnd
          })}
          disabled={slideConfig.isEnd}>
          <ChevronArrowRight className="absolute" />
        </button>
      </div>
    </div>
  )
}

export default SwiperNavigation
