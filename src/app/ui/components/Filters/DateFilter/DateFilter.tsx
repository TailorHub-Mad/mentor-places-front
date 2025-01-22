import InputSelect from '@components/Form/Inputs/Select/InputSelect'
import { type FC, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { getLocalizedYears } from '@utils/getLocalizedYears'
import { getLocalizedMonths } from '@utils/getLocalizedMonths'
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter'
import type { IFilterSelection } from '@components/Filters/SideBar/FilterSideBar'

interface IDateFilterProps {
  id: string
  onChange: (value: IFilterSelection) => void
  filterSelected: IFilterSelection[]
}

const DateFilter: FC<IDateFilterProps> = ({ onChange, filterSelected, id }) => {
  const locale = useLocale()
  const t = useTranslations()

  const months = createSelectOption(getLocalizedMonths(locale))
  const currentYear = new Date().getFullYear()
  const years = createSelectOption(getLocalizedYears(locale, currentYear, 5))

  const [selectedDate, setSelectedDate] = useState<{ month: string | null; year: string | null }>({
    month: (filterSelected.find((filter) => filter.id === id)?.value[0] as string) || null,
    year: (filterSelected.find((filter) => filter.id === id)?.value[1] as string) || null
  })

  const handleDateChange = (type: 'month' | 'year', value: IFilterSelection) => {
    const currentValue = selectedDate[type]
    const updatedValue = currentValue === value.id ? null : value.id // Unselect if the same value is selected

    const updatedDate = { ...selectedDate, [type]: updatedValue }
    setSelectedDate(updatedDate)

    // Trigger onChange only when both month and year are selected
    if (updatedDate.month && updatedDate.year) {
      onChange({
        id,
        value: [updatedDate.month, updatedDate.year]
      })
    } else if (!updatedDate.month && !updatedDate.year) {
      // Allow clearing by passing an empty array
      onChange({
        id,
        value: []
      })
    }
  }

  return (
    <div className="data-filter flex items-center gap-4">
      <InputSelect
        placeholder={t('filters.month')}
        options={months}
        onChange={(value) => handleDateChange('month', value)}
        valueSelected={selectedDate.month as string}
      />
      <InputSelect
        placeholder={t('filters.year')}
        options={years}
        onChange={(value) => handleDateChange('year', value)}
        valueSelected={selectedDate.year as string}
      />
    </div>
  )
}

export default DateFilter

const createSelectOption = (items: string[]) => items.map((item) => ({ label: capitalizeFirstLetter(item), value: item }))
