import React, { FC, useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import ChevronArrowLeft from '@components/icons/ChevronArrowLeft'
import ChevronArrowRight from '@components/icons/ChevronArrowRight'
import { cx } from '@utils/cx'

export enum SwiperNavigationPosition {
  TOP_RIGHT = 'topRight',
  TOP_LEFT = 'topLeft',
  BOTTOM_RIGHT = 'bottomRight',
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_CENTER = 'bottomCenter',
  TOP_CENTER = 'topCenter',
  DEFAULT = 'bothSides'
}

interface SwiperNavigationProps {
  position: SwiperNavigationPosition
}

const positionNavigationClasses = (position: SwiperNavigationPosition) => {
  switch (position) {
    case SwiperNavigationPosition.TOP_RIGHT:
      return 'md:absolute md:-top-2 md:right-2'
    case SwiperNavigationPosition.TOP_LEFT:
      return 'md:absolute md:-top-2 md:left-2'
    case SwiperNavigationPosition.BOTTOM_RIGHT:
      return 'md:absolute md:bottom-2 md:right-2'
    case SwiperNavigationPosition.BOTTOM_LEFT:
      return 'md:absolute md:bottom-2 md:left-2'
    case SwiperNavigationPosition.BOTTOM_CENTER:
      return 'md:absolute md:bottom-2 md:inset-x-auto'
    case SwiperNavigationPosition.TOP_CENTER:
      return 'md:absolute md:top-2 md:inset-x-auto'
    case SwiperNavigationPosition.DEFAULT:
      return ''
  }
}

const SwiperNavigation: FC<SwiperNavigationProps> = ({ position }) => {
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
    <div className={cx('swiper-navigation__wrapper flex justify-center mt-4 gap-2', positionNavigationClasses(position))}>
      <div
        className={cx('swiper-navigation__prev__wrapper flex items-center z-50', {
          'md:absolute md:left-2 md:inset-y-0': position === SwiperNavigationPosition.DEFAULT
        })}>
        <button
          onClick={() => swiper.slidePrev()}
          className={cx('swiper-navigation-prev p-[18px] bg-GRAY/40 rounded-full flex flex-col items-center justify-center', {
            'opacity-50': slideConfig.isBeginning
          })}
          disabled={slideConfig.isBeginning}>
          <ChevronArrowLeft className="absolute" />
        </button>
      </div>
      <div
        className={cx('swiper-navigation__next__wrapper  flex items-center z-50', {
          'md:absolute md:right-2 md:inset-y-0': position === SwiperNavigationPosition.DEFAULT
        })}>
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
