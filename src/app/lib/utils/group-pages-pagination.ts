export const groupPagesPagination = (pages: number[], currentPage: number): Array<number | '...'> => {
  const groupedPages: Array<number | '...'> = []
  const ellipsisString = '...'
  const GROUPING_THRESHOLD = 12

  if (pages.length <= GROUPING_THRESHOLD) {
    return pages // If fewer than 12 pages, show all
  }

  // First 3 pages
  groupedPages.push(...pages.slice(0, 3))

  // Add middle group centered around the current page
  addMiddleGroup(groupedPages, pages, currentPage, ellipsisString)

  // Last 3 pages
  groupedPages.push(...pages.slice(-3))

  return groupedPages
}

const addMiddleGroup = (groupedPages: Array<number | '...'>, pages: number[], currentPage: number, ellipsisString: '...') => {
  const start = Math.max(currentPage - 2, 4) // Ensure start is at least index 4
  const end = Math.min(currentPage + 2, pages.length - 3) // Ensure end is at most the last index - 3

  if (start > 4) {
    groupedPages.push(ellipsisString) // Ellipsis before the middle group
  }

  groupedPages.push(...pages.slice(start - 1, end)) // Add the current page and its surrounding pages

  if (end < pages.length - 3) {
    groupedPages.push(ellipsisString) // Ellipsis after the middle group
  }
}
