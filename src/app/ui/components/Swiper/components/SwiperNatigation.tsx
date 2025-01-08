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
    <div className="swiper-navigation-wrapper flex gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className={cx('swiper-navigation-prev p-[20px] bg-GRAY/40 rounded-full relative flex flex-col items-center justify-center', {
          'opacity-50': slideConfig.isBeginning
        })}
        disabled={slideConfig.isBeginning}>
        <ChevronArrowLeft className="absolute" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={cx('swiper-navigation-next p-[20px] bg-GRAY/40 rounded-full relative flex flex-col items-center justify-center', {
          'opacity-50': slideConfig.isEnd
        })}
        disabled={slideConfig.isEnd}>
        <ChevronArrowRight className="absolute" />
      </button>
    </div>
  )
}

export default SwiperNavigation
