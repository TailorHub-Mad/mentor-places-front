import { type FC } from 'react'
import CourseDetail from './components/CourseDetail'
import type { TAssetDetailOptions } from '@interfaces/assetDetail.type'

const CourseFeaturedDetails: FC<TAssetDetailOptions> = (details) => {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 lg:gap-10 bg-YELLOW py-12 px-7 rounded-lg">
      {Object.entries(details).map(([key, value]) => (
        <CourseDetail key={`course-detail-${key}-${value}`} type={key} value={value} />
      ))}
    </div>
  )
}

export default CourseFeaturedDetails
