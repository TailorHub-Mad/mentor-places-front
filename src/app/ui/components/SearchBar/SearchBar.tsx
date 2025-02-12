'use client'

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

export type ISearchSelected = Record<ESearchType, string | undefined>
export type ISearchOptions = Record<ESearchType, ISelectOption[]>
export type ISearchQuery = ISearchSelected

export interface ISearchBarProps {
  onChange: (query: ISearchQuery) => void
  onSearch: (value: string, type: ESearchType) => void
  valuesSelected?: ISearchSelected
  options: ISearchOptions
}

const SearchBar: FC<ISearchBarProps> = ({ onChange, valuesSelected, options, onSearch }) => {
  const t = useTranslations()

  const [selectedValues, setSelectedValues] = useState<ISearchSelected>(valuesSelected as ISearchSelected)

  // Helper to update the selected values and trigger onChange
  const updateSelectedValues = (newValues: Partial<ISearchSelected>) => {
    const updatedValues = { ...selectedValues, ...newValues }
    setSelectedValues(updatedValues)
    onChange(updatedValues)
  }

  const updateSearchQuery = (value: string, type: ESearchType) => {
    onSearch(value, type)
    updateSelectedValues({ [type]: value })
  }

  return (
    <div className="search-bar flex flex-wrap items-center gap-3 justify-start py-6">
      <div className="search-bar__discipline">
        <InputSearch
          type={ESearchType.DISCIPLINE}
          valueSelected={selectedValues?.discipline || valuesSelected?.discipline}
          onChange={(value) => updateSearchQuery(value.id, ESearchType.DISCIPLINE)}
          placeholder={t('search.disciplinePlaceholder')}
          options={options.discipline}
          onSearch={updateSearchQuery}
        />
      </div>
      <div className="search-bar__location">
        <InputSearch
          type={ESearchType.LOCATION}
          valueSelected={selectedValues?.location || valuesSelected?.location}
          onChange={(value) => updateSearchQuery(value.id, ESearchType.LOCATION)}
          placeholder={t('search.locationPlaceholder')}
          options={options.location}
          onSearch={updateSearchQuery}
        />
      </div>
      <div className="search-bar__button">
        <Button onClick={() => onChange(selectedValues)}>{t('actions.search')}</Button>
      </div>
    </div>
  )
}

export default SearchBar
