import type { FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import CourseFeedView from '@views/CourseFeed/CourseFeedView'
import client from '@configs/apolloClient'
import { GetCoursesDocument, type GetCoursesQuery, type GetCoursesQueryVariables } from '../../../../graphql/generated/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoursesFeedPage: FC<{ params: { lng: string }; searchParams: URLSearchParams }> = async ({ params: { lng }, searchParams }: any) => {
  unstable_setRequestLocale(lng)

  const order_by = createSorting(searchParams)

  console.log({ order_by })
  const { data } = await client.query<GetCoursesQuery, GetCoursesQueryVariables>({
    query: GetCoursesDocument
  })

  console.log('CoursesFeedPage: ', { ...data.courses })

  return (
    <div className="course-feed-page">
      <CourseFeedView courses={data.courses} />
    </div>
  )
}

export default CoursesFeedPage

function createSorting(searchParams: { order: string; sort: string }) {
  const order_by: Record<string, string> = {} // Initialize the order_by object

  // Extract sort and order parameters from the URLSearchParams object
  const sort = searchParams.sort
  const order = searchParams.order || 'asc' // Default to ascending order if not provided

  // Handle sorting based on `sort`
  if (sort === 'date') {
    order_by.start_date = order // Sort by start_date (asc/desc)
  } else if (sort === 'title') {
    order_by.commercial_name = order // Sort by commercial_name (asc/desc)
  }

  return order_by
}
