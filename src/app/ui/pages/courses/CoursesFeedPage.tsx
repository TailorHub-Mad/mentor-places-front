import type { FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import CourseFeedView from '@views/CourseFeed/CourseFeedView'
import client from '@configs/apolloClient'
import { GetCoursesDocument, type GetCoursesQuery, type GetCoursesQueryVariables } from '../../../../graphql/generated/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoursesFeedPage: FC = async ({ params: { lng } }: any) => {
  unstable_setRequestLocale(lng)
  const { data } = await client.query<GetCoursesQuery, GetCoursesQueryVariables>({
    query: GetCoursesDocument
  })

  console.log({ data })

  return (
    <div className="course-feed-page">
      <CourseFeedView courses={data.courses} />
    </div>
  )
}

export default CoursesFeedPage
