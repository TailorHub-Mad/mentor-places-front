export const getLocalizeNumber = (value: string | number, locale: string = 'en-US'): string | number => {
  if (typeof value === 'number') {
    return new Intl.NumberFormat(locale).format(value)
  }
  return value
}
