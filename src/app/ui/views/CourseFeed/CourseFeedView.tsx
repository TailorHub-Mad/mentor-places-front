import type { FC } from 'react'
import CoursesFeedBlock from '../../blocks/CoursesFeed/CoursesFeedBlock'
import { useCourseFeedMapper } from '../../../lib/mapper/useCourseFeedMapper'
import type { FilterCoursesQuery } from '../../../../graphql/generated/client'
import { useTranslations } from 'next-intl'
import FilterSideBar from '@components/Filters/SideBar/FilterSideBar'
import { FILTER_SIDEBAR_MOCK } from '@components/Filters/SideBar/mock'
import HeroCourseFeed from '../../blocks/HeroCourseFeed/HeroCourseFeed'
import { HERO_COURSE_FEED_MOCK } from '../../blocks/HeroCourseFeed/mock'

export interface ICourseFeedViewProps {
  courses: FilterCoursesQuery['courses']
}

const CourseFeedView: FC<ICourseFeedViewProps> = ({ courses }) => {
  const filteredCourses = useCourseFeedMapper(courses)
  const t = useTranslations()

  return (
    <div className="course-feed-view page">
      <HeroCourseFeed {...HERO_COURSE_FEED_MOCK} />
      <div className="flex flex-wrap gap-3">
        <FilterSideBar filters={FILTER_SIDEBAR_MOCK.filters} />
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
    </div>
  )
}

export default CourseFeedView
