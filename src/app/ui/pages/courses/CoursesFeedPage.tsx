import type { FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import CourseFeedView from '@views/CourseFeed/CourseFeedView'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoursesFeedPage: FC = async ({ params: { lng } }: any) => {
  unstable_setRequestLocale(lng)

  return (
    <div className="course-feed-page">
      <CourseFeedView />
    </div>
  )
}

export default CoursesFeedPage
