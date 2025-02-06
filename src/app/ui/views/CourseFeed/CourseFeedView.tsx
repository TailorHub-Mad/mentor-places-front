import type { FC } from 'react'
import CoursesFeedBlock from '../../blocks/CoursesFeed/CoursesFeedBlock'
import { useCourseFeedMapper } from '../../../lib/mapper/useCourseFeedMapper'
import type { FilterCoursesQuery } from '../../../../graphql/generated/client'
import { useTranslations } from 'next-intl'

export interface ICourseFeedViewProps {
  courses: FilterCoursesQuery['courses']
}

const CourseFeedView: FC<ICourseFeedViewProps> = ({ courses }) => {
  const filteredCourses = useCourseFeedMapper(courses)
  const t = useTranslations()

  return (
    <div className="course-feed-view page">
      <CoursesFeedBlock
        courses={filteredCourses}
        banner={{
          text: t('bannerCourseFeed.text'),
          cta: t('bannerCourseFeed.cta'),
          action: 'contact' //TODO: Define action to trigger
        }}
        totalPages={10} //TODO: Pending to generate this value on Directus
        totalCourses={filteredCourses.length}
      />
    </div>
  )
}

export default CourseFeedView
