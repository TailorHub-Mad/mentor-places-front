import { type FC } from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import InputSearch from '@components/SearchBar/components/InputSearch'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'
import Button from '@components/Button/Button'

export enum ESearchType {
  LOCATION = 'location',
  DISCIPLINE = 'discipline'
}

export type IValuesSelected = Record<ESearchType, string | undefined>
export type ISearchOptions = Record<ESearchType, ISelectOption[]>
export type ISearchQuery = IValuesSelected

export interface ISearchBarProps {
  onChange: (query: ISearchQuery) => void
  onSearch: (value: string, type: ESearchType) => void
  valuesSelected: IValuesSelected
  options: ISearchOptions
}

const SearchBar: FC<ISearchBarProps> = ({ onChange, valuesSelected, options, onSearch }) => {
  const t = useTranslations()

  const [searchQuery, setSearchQuery] = useState<ISearchQuery>(valuesSelected)

  const handleOnChange = () => {
    onChange({
      [ESearchType.LOCATION]: searchQuery.location,
      [ESearchType.DISCIPLINE]: searchQuery.discipline
    })
  }

  const handleSearchQuery = (value: string, type: ESearchType) => {
    onSearch(value, type)
    setSearchQuery((prev) => ({ ...prev, [type]: value }))
    onChange({
      ...searchQuery,
      [type]: value
    })
  }

  return (
    <div className="search-bar flex items-center gap-3 justify-start py-6">
      <div className="search-bar__discipline">
        <InputSearch
          type={ESearchType.DISCIPLINE}
          valueSelected={valuesSelected.discipline || searchQuery.discipline}
          onChange={(value) => handleSearchQuery(value.id, ESearchType.DISCIPLINE)}
          placeholder={t('search.disciplinePlaceholder')}
          options={options.discipline}
          onSearch={handleSearchQuery}
        />
      </div>
      <div className="search-bar__location">
        <InputSearch
          type={ESearchType.LOCATION}
          valueSelected={valuesSelected.location || searchQuery.location}
          onChange={(value) => handleSearchQuery(value.id, ESearchType.LOCATION)}
          placeholder={t('search.locationPlaceholder')}
          options={options.location}
          onSearch={handleSearchQuery}
        />
      </div>
      <div className="search-bar__button">
        <Button onClick={handleOnChange}>{t('actions.search')}</Button>
      </div>
    </div>
  )
}

export default SearchBar
