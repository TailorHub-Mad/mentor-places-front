import InputSelect from '@components/Form/Inputs/Select/InputSelect'
import { type FC, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { getLocalizedYears } from '@utils/getLocalizedYears'
import { getLocalizedMonths } from '@utils/getLocalizedMonths'
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter'

interface IDateFilterProps {
  onChange: (value: string[]) => void
  filterSelected: string[]
}

const DateFilter: FC<IDateFilterProps> = ({ onChange, filterSelected }) => {
  const [selectedDateFilters, setSelectedDateFilters] = useState<string[]>(filterSelected)
  const locale = useLocale()
  const t = useTranslations()

  const months = createSelectOption(getLocalizedMonths(locale))
  const currentYear = new Date().getFullYear()
  const years = createSelectOption(getLocalizedYears(locale, currentYear, 5))

  const handleInputChange = (value: string | undefined, type: typeof MONTH | typeof YEAR) => {
    const updatedFilters: string[] = type === MONTH ? [value || '', selectedDateFilters[1]] : [selectedDateFilters[0], value || '']
    setSelectedDateFilters(updatedFilters)
    onChange(updatedFilters)
  }

  return (
    <div className="data-filter flex items-center gap-4">
      <InputSelect
        placeholder={t('filters.month')}
        options={months}
        onChange={(value) => handleInputChange(value, MONTH)}
        valueSelected={createValueSelected(selectedDateFilters[0])}
      />
      <InputSelect
        placeholder={t('filters.year')}
        options={years}
        onChange={(value) => handleInputChange(value, YEAR)}
        valueSelected={createValueSelected(selectedDateFilters[1])}
      />
    </div>
  )
}

export default DateFilter

const createSelectOption = (items: string[]) => items.map((item) => ({ label: capitalizeFirstLetter(item), value: item }))
const createValueSelected = (value: string) => ({ value, label: value })

const MONTH = 'month'
const YEAR = 'year'
