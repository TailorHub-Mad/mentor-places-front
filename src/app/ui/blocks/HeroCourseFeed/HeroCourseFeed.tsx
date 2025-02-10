'use client'

import { type FC, useState } from 'react'
import SearchBar, { type ESearchType, type ISearchBarProps, type ISearchQuery } from '@components/SearchBar/SearchBar'
import type { ISearchOptions, ISearchSelected } from '@components/SearchBar/SearchBar'

export interface IHeroCourseFeedProps {
  title: string
  description?: string
  imageSrc: string
  options: ISearchOptions
}

const HeroCourseFeed: FC<IHeroCourseFeedProps> = ({ title, description, imageSrc, options }) => {
  const [selectedValues, setSelectedValues] = useState<ISearchSelected>()
  const [filteredOptions, setFilteredOptions] = useState(options)

  const onChange = (query: ISearchQuery) => {
    setSelectedValues(query)
  }

  const onSearch = (value: string, type: ESearchType) => {
    const updatedOptions = filterOptions(value, type, options)
    setFilteredOptions(updatedOptions)
  }

  return (
    <div className="hero-course-feed">
      <div className="hero-course-feed__title mb-[40px] md:mb-[48px]">
        <h1 className="text-xl-mobile md:text-xl font-xl leading-[1]">{title}</h1>
        {description && <p className="text-s font-s mt-4">{description}</p>}
      </div>
      <div
        className="hero-course-feed__image relative overflow-hidden h-[400px] flex items-center rounded-[8px]"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      <div className="hero-course-feed__search">
        <SearchBar options={filteredOptions} onChange={onChange} onSearch={onSearch} valuesSelected={selectedValues} />
      </div>
    </div>
  )
}

export default HeroCourseFeed

const filterOptions = (value: string, type: ESearchType, options: ISearchBarProps['options']) => {
  const OPTION_LABEL_KEY = 'value'
  if (!value) return options
  return {
    ...options,
    [type]: options[type].filter((option) => option[OPTION_LABEL_KEY].toLowerCase().includes(value.toLowerCase()))
  }
}
