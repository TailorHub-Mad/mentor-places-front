import InputSelect from '@components/Form/Inputs/Select/InputSelect'
import { type FC } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { getLocalizedYears } from '@utils/getLocalizedYears'
import { getLocalizedMonths } from '@utils/getLocalizedMonths'
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter'
import type { IFilterSelection } from '@components/Filters/SideBar/FilterSideBar'

interface IDateFilterProps {
  onChange: (value: IFilterSelection) => void
  filterSelected: IFilterSelection[]
}

const DateFilter: FC<IDateFilterProps> = ({ onChange, filterSelected }) => {
  const locale = useLocale()
  const t = useTranslations()

  const months = createSelectOption(getLocalizedMonths(locale))
  const currentYear = new Date().getFullYear()
  const years = createSelectOption(getLocalizedYears(locale, currentYear, 5))

  const handleInputChange = (value: IFilterSelection) => {
    onChange(value)
  }

  const selectedMonth = filterSelected.find((month) => months.find((m) => m.value === month.id))
  const selectedYear = filterSelected.find((year) => years.find((m) => m.value === year.id))

  return (
    <div className="data-filter flex items-center gap-4">
      <InputSelect
        placeholder={t('filters.month')}
        options={months}
        onChange={(value) => handleInputChange(value)}
        valueSelected={selectedMonth}
      />
      <InputSelect
        placeholder={t('filters.year')}
        options={years}
        onChange={(value) => handleInputChange(value)}
        valueSelected={selectedYear}
      />
    </div>
  )
}

export default DateFilter

const createSelectOption = (items: string[]) => items.map((item) => ({ label: capitalizeFirstLetter(item), value: item }))
