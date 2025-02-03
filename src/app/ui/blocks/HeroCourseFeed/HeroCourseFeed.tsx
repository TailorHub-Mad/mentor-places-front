import type { FC } from 'react'
import Image from 'next/image'
import { useScreenWidth } from '@hooks/useScreenWidth'
import useBreakpoint from '@hooks/useBreakpoint'

export interface IHeroCourseFeedProps {
  title: string
  description?: string
  imageSrc: string
}

const HeroCourseFeed: FC<IHeroCourseFeedProps> = ({ title, description, imageSrc }) => {
  const screenWidth = useScreenWidth()
  const { isMobile } = useBreakpoint()

  const imageHeight = isMobile
    ? (screenWidth / 3) * 2 // 3:2 aspect ratio for mobile
    : (screenWidth / 2) * 3 // 2:3 aspect ratio for desktop

  return (
    <div className="hero-course-feed">
      <div className="hero-course-feed__title mb-[40px] md:mb-[48px]">
        <h1 className="text-xl-mobile md:text-xl font-xl leading-[1]">{title}</h1>
        {description && <p className="text-s font-s mt-4">{description}</p>}
      </div>
      <div className="hero-course-feed__image relative overflow-hidden h-auto sm:h-[400px] flex items-center rounded-[8px]">
        <Image
          src={imageSrc}
          alt={description || title}
          className="sm:absolute"
          width={screenWidth} // Dynamically sets width
          height={imageHeight} // Adjust height proportionally (2:3 aspect ratio)
        />
      </div>
    </div>
  )
}

export default HeroCourseFeed
