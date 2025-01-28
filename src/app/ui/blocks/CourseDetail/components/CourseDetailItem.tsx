import type { FC } from 'react'
import { cx } from '@utils/cx'

interface ICourseDetailItemProps {
  title: string
  description: string
  className?: string
}

const CourseDetailItem: FC<ICourseDetailItemProps> = ({ description, title, className }) => {
  return (
    <div className={cx('course-detail-item border-b border-BLACK/10 flex flex-col gap-4 pb-4', className)}>
      <h3 className="text-s font-s">{title}</h3>
      <p className="text-s font-s text-BLACK/60">{description}</p>
    </div>
  )
}

export default CourseDetailItem
