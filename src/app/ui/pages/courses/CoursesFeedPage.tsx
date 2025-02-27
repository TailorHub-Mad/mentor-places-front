import type { FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import CourseFeedView from '@views/CourseFeed/CourseFeedView'
import client from '@configs/apolloClient'
import {
  DisciplinesDocument,
  FilterCoursesDocument,
  type FilterCoursesQuery,
  type FilterCoursesQueryVariables,
  type DisciplinesQuery,
  type DisciplinesQueryVariables
} from '../../../../graphql/generated/client'
import { type ELocale } from '../../../lib/enums/globals.enums'
import { LOCALES_GRAPHQL } from '../../../../graphql/constants'
import { getPaginationFromParams } from '@utils/getPaginationFromParams'
import { getSortingString } from '@utils/getSortingString'
import { parseCategoryFilters } from '@components/Filters/SideBar/utils/handleFilters'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoursesFeedPage: FC<{ params: { lng: ELocale }; searchParams: any }> = async ({ params: { lng }, searchParams }) => {
  unstable_setRequestLocale(lng)

  const sortArray = getSortingString(searchParams)
  const pagination = getPaginationFromParams(new URLSearchParams(searchParams)) // Extract pagination info
  const selectedDisciplines = parseCategoryFilters(new URLSearchParams(searchParams), []) // Extract disciplines

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

  const idDisciplines = selectedDisciplines.map((discipline) => discipline.id)

  const courses =
    idDisciplines.length > 0
      ? data.courses.filter((course) => {
          return course.main_taxonomy?.some(
            (taxonomy) =>
              idDisciplines.includes(taxonomy?.main_taxonomy_id?.discipline?.id || '') ||
              (taxonomy?.main_taxonomy_id?.specialization_level1_visualization &&
                idDisciplines.includes(taxonomy?.main_taxonomy_id?.specialization_level1?.id || '')) ||
              (taxonomy?.main_taxonomy_id?.specialization_level2_visualization &&
                idDisciplines.includes(taxonomy?.main_taxonomy_id?.specialization_level2?.id || ''))
          )
        })
      : data.courses

  const { data: disciplines } = await client
    .query<DisciplinesQuery, DisciplinesQueryVariables>({
      query: DisciplinesDocument,
      variables: {
        languageName: LOCALES_GRAPHQL[lng]
      }
    })
    .catch((error) => {
      console.error('error', error.networkError.result.errors[0].extensions)
      return { data: { main_taxonomy: [] } }
    })

  return (
    <div className="course-feed-page flex justify-center">
      <CourseFeedView courses={courses} disciplines={disciplines.main_taxonomy} states={data.courses} />
    </div>
  )
}

export default CoursesFeedPage
