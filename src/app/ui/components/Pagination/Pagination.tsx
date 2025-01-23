import type { FC } from 'react'
import ChevronArrowRight from '@components/icons/ChevronArrowRight'
import ChevronArrowLeft from '@components/icons/ChevronArrowLeft'
import { cx } from '@utils/cx'

export interface IPaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
  className?: string
}

const Pagination: FC<IPaginationProps> = ({ totalPages, page, onChange, className }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const groupedPages = groupPages(pages, page)

  const handlePrev = () => {
    if (page > 1) onChange(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) onChange(page + 1)
  }

  return (
    <div className={cx('pagination-block flex items-center justify-center gap-2', className)}>
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="pagination-block__prev flex items-center justify-center p-[20px] rounded-full bg-GRAY/60 disabled:opacity-40 disabled:cursor-not-allowed">
        <ChevronArrowLeft className="absolute" />
      </button>
      <div class="pagination-block__number-loop flex items-center gap-4">
        {groupedPages.map((pageNumber, index) =>
          pageNumber === '...' ? (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis text-BLACK/40">
              ...
            </span>
          ) : (
            <button
              className={cx('text-s font-s', {
                'font-bold': pageNumber === page,
                'text-BLACK/60': pageNumber !== page
              })}
              key={pageNumber}
              onClick={() => onChange(pageNumber)}>
              {pageNumber}
            </button>
          )
        )}
      </div>
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="pagination-block__next flex items-center justify-center p-[20px] rounded-full bg-GRAY/60 disabled:opacity-40 disabled:cursor-not-allowed">
        <ChevronArrowRight className="absolute" />
      </button>
    </div>
  )
}

export default Pagination

const groupPages = (pages: number[], currentPage: number): Array<number | '...'> => {
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
