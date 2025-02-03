import { FC, useState } from 'react'
import { useTranslations } from 'next-intl'
import InputSearch from '@components/SearchBar/components/InputSearch'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'
import Button from '@components/Button/Button'

export enum ESearchType {
  LOCATION = 'location',
  DISCIPLINE = 'discipline'
}

export type IValuesSelected = Record<ESearchType, string>
export type ISearchOptions = Record<ESearchType, ISelectOption[]>
type ISearchQuery = Record<ESearchType, string>

interface ISearchBarProps {
  onChange: (query: ISearchQuery) => void
  valuesSelected: IValuesSelected
  options: ISearchOptions
}

const SearchBar: FC<ISearchBarProps> = ({ onChange, valuesSelected, options }) => {
  const t = useTranslations()

  const [searchQuery, setSearchQuery] = useState<ISearchQuery>(valuesSelected)

  const handleOnChange = () => {
    onChange({
      [ESearchType.LOCATION]: searchQuery.location,
      [ESearchType.DISCIPLINE]: searchQuery.discipline
    })
  }

  const handleSearchQuery = (value: string, type: ESearchType) => {
    setSearchQuery((prev) => ({ ...prev, [type]: value }))
  }

  return (
    <div className="search-bar flex items-center gap-3 justify-start py-6">
      <div className="search-bar__discipline">
        <InputSearch
          valueSelected={valuesSelected.discipline}
          onChange={(value) => handleSearchQuery(value.id, ESearchType.DISCIPLINE)}
          placeholder={t('search.disciplinePlaceholder')}
          options={options.discipline}
        />
      </div>
      <div className="search-bar__location">
        <InputSearch
          valueSelected={valuesSelected.location}
          onChange={(value) => handleSearchQuery(value.id, ESearchType.LOCATION)}
          placeholder={t('search.locationPlaceholder')}
          options={options.location}
        />
      </div>
      <div className="search-bar__button">
        <Button onClick={() => handleOnChange}>{t('actions.search')}</Button>
      </div>
    </div>
  )
}

export default SearchBar
