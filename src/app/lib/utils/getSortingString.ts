export function getSortingString(searchParams: { order: string; sort: string }) {
  // Extract sort and order parameters from the URLSearchParams object
  const sort = searchParams.sort
  const order = searchParams.order || 'asc' // Default to ascending order if not provided

  const orderString = order === 'asc' ? '' : '-'
  const sortArray: string[] = []

  if (sort === 'date') {
    sortArray.push(`${orderString}course_trans.course_id.start_date`)
  } else if (sort === 'title') {
    sortArray.push(`${orderString}course_trans.commercial_name`)
  }

  return sortArray
}
