import type { FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import CourseFeedView from '@views/CourseFeed/CourseFeedView'
import client from '@configs/apolloClient'
import { FilterCoursesDocument, type FilterCoursesQuery, type FilterCoursesQueryVariables } from '../../../../graphql/generated/client'
import { type ELocale } from '../../../lib/enums/globals.enums'
import { LOCALES_GRAPHQL } from '../../../../graphql/constants'
import { getPaginationFromParams } from '@utils/getPaginationFromParams'
import { getSortingString } from '@utils/getSortingString'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoursesFeedPage: FC<{ params: { lng: ELocale }; searchParams: any }> = async ({ params: { lng }, searchParams }) => {
  unstable_setRequestLocale(lng)

  const sortArray = getSortingString(searchParams)
  const pagination = getPaginationFromParams(new URLSearchParams(searchParams)) // Extract pagination info

  const { page, limit } = pagination

  const { data } = await client.query<FilterCoursesQuery, FilterCoursesQueryVariables>({
    query: FilterCoursesDocument,
    variables: {
      languageName: LOCALES_GRAPHQL[lng],
      page,
      limit,
      sort: sortArray
    }
  })

  return (
    <div className="course-feed-page">
      <CourseFeedView courses={data.courses} />
    </div>
  )
}

export default CoursesFeedPage
