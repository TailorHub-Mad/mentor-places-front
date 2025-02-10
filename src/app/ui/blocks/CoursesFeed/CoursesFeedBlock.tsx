import type { FC } from 'react'
import { type IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import { type IBannerProps } from '../Banner/Banner'
import CoursesFeed from './components/CoursesFeed'
import Pagination from '@components/Pagination/Pagination'
import { useTranslations } from 'next-intl'
import SortSelectTrigger from './components/SortSelectTrigger'
import { cx } from '@utils/cx'

export interface ICoursesFeedBlockProps {
  courses: IAssetCardIndexProps[]
  banner: IBannerProps
  totalPages: number
  totalCourses: number
  className?: string
}

const CoursesFeedBlock: FC<ICoursesFeedBlockProps> = ({ courses, banner, totalPages, totalCourses, className }) => {
  const t = useTranslations()

  return (
    <div className={cx('courses-feed-block flex flex-col gap-[24px]', className)}>
      <div className="course-feed-block__header flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="font-s text-m-mobile">
          <span className="">{totalCourses}&nbsp;</span>
          <span className="">{t('courseDetails.totalFound')}</span>
        </h2>
        <div className="sort-input-action">
          <SortSelectTrigger />
        </div>
      </div>
      <CoursesFeed courses={courses} banner={banner} />
      <Pagination totalPages={totalPages} />
    </div>
  )
}

export default CoursesFeedBlock
