'use client'

import type { FC } from 'react'
import ChevronArrowRight from '@components/icons/ChevronArrowRight'
import ChevronArrowLeft from '@components/icons/ChevronArrowLeft'
import { cx } from '@utils/cx'
import { groupPagesPagination } from '@utils/group-pages-pagination'
import { useSearchParams, useRouter } from 'next/navigation'

export interface IPaginationProps {
  totalPages: number
  className?: string
}

const Pagination: FC<IPaginationProps> = ({ totalPages, className }) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = parseInt(searchParams.get('page') || '1', 10)
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const onChange = (newPage: number) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('page', newPage.toString())
    router.push(`?${params.toString()}`)
  }

  const groupedPages = groupPagesPagination(pages, page)

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
      <div className="pagination-block__number-loop flex items-center gap-4">
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
