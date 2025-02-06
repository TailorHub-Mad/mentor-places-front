import type { FC } from 'react'
import Image from 'next/image'
import { useScreenSize } from '@hooks/useScreenSize'
import useBreakpoint from '@hooks/useBreakpoint'
import SearchBar, { type ESearchType, type ISearchQuery } from '@components/SearchBar/SearchBar'
import type { ISearchOptions, IValuesSelected } from '@components/SearchBar/SearchBar'

export interface IHeroCourseFeedProps {
  title: string
  description?: string
  imageSrc: string
  onChange: (query: ISearchQuery) => void
  onSearch: (value: string, type: ESearchType) => void
  valuesSelected: IValuesSelected
  options: ISearchOptions
}

const HeroCourseFeed: FC<IHeroCourseFeedProps> = ({ title, description, imageSrc, onChange, valuesSelected, options, onSearch }) => {
  const { screenWidth } = useScreenSize()
  const { isMobile } = useBreakpoint()

  const imageHeight = isMobile ? (screenWidth / 3) * 2 : (screenWidth / 2) * 3

  return (
    <div className="hero-course-feed">
      <div className="hero-course-feed__title mb-[40px] md:mb-[48px]">
        <h1 className="text-xl-mobile md:text-xl font-xl leading-[1]">{title}</h1>
        {description && <p className="text-s font-s mt-4">{description}</p>}
      </div>
      <div className="hero-course-feed__image relative overflow-hidden h-auto sm:h-[400px] flex items-center rounded-[8px]">
        <Image src={imageSrc} alt={description || title} className="sm:absolute" width={screenWidth} height={imageHeight} />
      </div>
      <div className="hero-course-feed__search">
        <SearchBar options={options} onChange={onChange} onSearch={onSearch} valuesSelected={valuesSelected} />
      </div>
    </div>
  )
}

export default HeroCourseFeed
