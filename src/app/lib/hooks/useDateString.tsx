import { useParams } from 'next/navigation'

interface LocaleDateStringProps {
  date: Date
  options: Intl.DateTimeFormatOptions
}

export const useLocaleDateString = ({ date, options }: LocaleDateStringProps) => {
  const { locale } = useParams()

  return date.toLocaleDateString(locale, options)
}
