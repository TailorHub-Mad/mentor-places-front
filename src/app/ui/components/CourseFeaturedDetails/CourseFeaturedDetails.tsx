import { type FC } from 'react'
import CourseDetail from './components/CourseDetail'
import type { TAssetDetailOptions } from '@interfaces/assetDetail.type'
import { cx } from '@utils/cx'

const CourseFeaturedDetails: FC<TAssetDetailOptions & { className?: string }> = ({ className, ...details }) => {
  // Limit the entries to match design
  const limitedDetails = Object.entries(details).slice(0, 5)
  return (
    <div className={cx('grid grid-cols-2 gap-6 lg:grid-cols-5 lg:gap-10 bg-YELLOW py-12 px-7 rounded-lg', className)}>
      {limitedDetails.slice(0, 5).map(([key, value]) => (
        <CourseDetail key={`course-detail-${key}-${value}`} type={key} value={value} />
      ))}
    </div>
  )
}

export default CourseFeaturedDetails
