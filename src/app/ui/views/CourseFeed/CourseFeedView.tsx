import type { FC } from 'react'
import CoursesFeedBlock from '../../blocks/CoursesFeed/CoursesFeedBlock'
import { ESortDirection } from '../../../lib/enums/globals.enums'
import { ASSET_CARD_INDEX_MOCK } from '@components/AssetCardIndex/mock'

const CourseFeedView: FC = () => {
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
