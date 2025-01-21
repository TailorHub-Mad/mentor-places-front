export const getLocalizedMonths = (locale: string): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'long' })
  return Array.from({ length: 12 }, (_, i) => formatter.format(new Date(0, i)))
}
