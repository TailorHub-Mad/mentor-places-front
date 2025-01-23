import type { FC } from 'react'

export interface IPaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

const Pagination: FC<IPaginationProps> = ({ totalPages, page, onChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
  return (
    <div className="flex items-center gap-2">
      {pages.map((pageNumber) => (
        <button key={pageNumber} onClick={() => onChange(pageNumber)} style={{ fontWeight: pageNumber === page ? 'bold' : 'normal' }}>
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

export default Pagination
