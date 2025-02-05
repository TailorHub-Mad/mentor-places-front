import type { FC } from 'react'
import CoursesFeedBlock from '../../blocks/CoursesFeed/CoursesFeedBlock'
import { ESortDirection } from '../../../lib/enums/globals.enums'
import { ASSET_CARD_INDEX_MOCK } from '@components/AssetCardIndex/mock'
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
        courses={Array.from({ length: 10 }).map(() => ASSET_CARD_INDEX_MOCK)}
        sortOptions={[
          {
            value: 'recomended',
            label: 'Recomendado'
          },
          {
            value: 'date',
            label: 'Fecha'
          },
          {
            value: 'title',
            label: 'Title'
          }
        ]}
        banner={{
          text: 'Find out which Master’s programmes match your personality!',
          cta: 'Haz tu test GRATIS!',
          action: 'contact'
        }}
        page={1}
        totalPages={10}
        totalCourses={100}
        sortOrder={ESortDirection.ASC}
        sortOption={'recomended'}
      />
    </div>
  )
}

export default CourseFeedView
