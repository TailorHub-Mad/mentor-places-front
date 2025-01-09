import { useParams } from 'next/navigation'

interface DateStringProps {
  date: Date
  options: Intl.DateTimeFormatOptions
}

export const useDateString = ({ date, options }: DateStringProps) => {
  const { locale } = useParams()

  return date.toLocaleDateString(locale, options)
}
