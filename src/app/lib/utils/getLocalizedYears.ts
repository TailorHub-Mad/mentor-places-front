export const getLocalizedYears = (locale: string, startYear: number, numYears: number): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { year: 'numeric' })
  return Array.from({ length: numYears }, (_, i) => formatter.format(new Date(startYear + i, 0)))
}
