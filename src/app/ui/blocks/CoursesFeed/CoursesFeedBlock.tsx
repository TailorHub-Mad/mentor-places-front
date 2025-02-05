import type { FC } from 'react'
import { type IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import { type IBannerProps } from '../Banner/Banner'
import CoursesFeed from './components/CoursesFeed'
import Pagination from '@components/Pagination/Pagination'
import { useTranslations } from 'next-intl'
import type { ESortDirection } from '../../../lib/enums/globals.enums'
import SortSelectTrigger from './components/SortSelectTrigger'
import type { ISelectOption } from '@components/Form/Inputs/Select/InputSelect'

export interface ICoursesFeedBlockProps {
  courses: IAssetCardIndexProps[]
  banner: IBannerProps
  page: number
  totalPages: number
  totalCourses: number
  sortOptions: ISelectOption[]
  sortOption: string
  sortOrder: ESortDirection
}

const CoursesFeedBlock: FC<ICoursesFeedBlockProps> = ({
  courses,
  banner,
  totalPages,
  page,
  totalCourses,
  sortOption,
  sortOrder,
  sortOptions
}) => {
  const t = useTranslations()

  return (
    <div className="courses-feed-block flex flex-col gap-[24px]">
      <div className="course-feed-block__header flex items-center justify-between">
        <h2 className="font-s text-m-mobile">
          <span className="">{totalCourses}&nbsp;</span>
          <span className="">{t('courseDetails.totalFound')}</span>
        </h2>
        <div className="sort-input-action">
          <SortSelectTrigger order={sortOrder} sortOptions={sortOptions} selectedSort={sortOption} />
        </div>
      </div>
      <CoursesFeed courses={courses} banner={banner} />
      <Pagination page={page} totalPages={totalPages} />
    </div>
  )
}

export default CoursesFeedBlock
