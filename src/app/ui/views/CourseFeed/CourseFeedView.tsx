import type { FC } from 'react'
import CoursesFeedBlock from '../../blocks/CoursesFeed/CoursesFeedBlock'
import type { GetCoursesQuery } from '../../../../graphql/generated/client'
import { useCourseFeedMapper } from '../../../lib/mapper/useCourseFeedMapper'

export interface ICourseFeedViewProps {
  courses: GetCoursesQuery['courses']
}

const CourseFeedView: FC<ICourseFeedViewProps> = ({ courses }) => {
  const filteredCourses = useCourseFeedMapper(courses)

  console.log({ filteredCourses })

  return (
    <div className="course-feed-view page">
      <CoursesFeedBlock
        courses={filteredCourses}
        banner={{
          text: 'Find out which Master’s programmes match your personality!',
          cta: 'Haz tu test GRATIS!',
          action: 'contact'
        }}
        totalPages={10}
        totalCourses={filteredCourses.length}
      />
    </div>
  )
}

export default CourseFeedView
