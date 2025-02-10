export const createDateString = (dateFunc: {
  __typename?: 'date_functions'
  year?: number | null
  month?: number | null
  day?: number | null
}) => {
  const { day, month, year } = dateFunc
  if (!day || !month || !year) return ''
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
}
