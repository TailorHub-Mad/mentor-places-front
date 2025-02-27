'use client'
import { type FC, useState, useEffect } from 'react'
import SearchBar, { type ESearchType, type ISearchOptions, type ISearchSelected, type ISearchQuery } from '@components/SearchBar/SearchBar'
import { useRouter, useSearchParams } from 'next/navigation'

export interface IHeroCourseFeedProps {
  title: string
  description?: string
  imageSrc: string
  options: ISearchOptions
}

const HeroCourseFeed: FC<IHeroCourseFeedProps> = ({ title, description, imageSrc, options }) => {
  const [selectedValues, setSelectedValues] = useState<ISearchSelected | undefined>(undefined)
  const [filteredOptions, setFilteredOptions] = useState<ISearchOptions>(options)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString() || '')
    const mappedValues = mapParamsToSelectedValues(params)
    setSelectedValues(mappedValues)
  }, [searchParams])

  const handleSelectionChange = (query: ISearchQuery) => {
    const currentParams = new URLSearchParams(searchParams?.toString() || '')
    const updatedParams = buildUpdatedSearchParams(currentParams, query)
    router.push(`?${updatedParams.toString()}`)
  }

  const handleFilterSearch = (value: string, type: ESearchType) => {
    const updatedOptions = filterOptions(value, type, options)
    setFilteredOptions(updatedOptions)
  }

  return (
    <div className="hero-course-feed">
      <div className="hero-course-feed__title mb-[40px] md:mb-[48px]">
        <h1 className="text-xl-mobile md:text-xl font-xl leading-[1]">{title}</h1>
        {description && <p className="text-s font-s mt-4">{description}</p>}
      </div>
      <ImageContainer imageSrc={imageSrc} />
      <div className="hero-course-feed__search py-6">
        <SearchBar
          options={filteredOptions}
          onChange={handleSelectionChange}
          onSearch={handleFilterSearch}
          valuesSelected={selectedValues}
        />
      </div>
    </div>
  )
}

const ImageContainer: FC<{ imageSrc: string }> = ({ imageSrc }) => (
  <div
    className="hero-course-feed__image relative overflow-hidden h-[400px] flex items-center rounded-[8px]"
    style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />
)

export default HeroCourseFeed

const mapParamsToSelectedValues = (params: URLSearchParams): ISearchSelected => {
  const selectedValues: ISearchSelected = {} as ISearchSelected
  params.forEach((value, key) => {
    selectedValues[key as ESearchType] = value
  })
  return selectedValues
}

const buildUpdatedSearchParams = (currentParams: URLSearchParams, query: ISearchQuery): URLSearchParams => {
  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      currentParams.set(key, value)
    } else {
      currentParams.delete(key)
    }
  })
  return currentParams
}

const filterOptions = (value: string, type: ESearchType, options: ISearchOptions): ISearchOptions => {
  if (!value || !options[type]?.length) return options
  const OPTION_LABEL_KEY = 'value' // Key for filtering options
  return {
    ...options,
    [type]: options[type].filter(
      (option) => typeof option[OPTION_LABEL_KEY] === 'string' && option[OPTION_LABEL_KEY].toLowerCase().includes(value.toLowerCase())
    )
  }
}
