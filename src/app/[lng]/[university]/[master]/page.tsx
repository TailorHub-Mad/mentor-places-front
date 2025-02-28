import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
// import type { ELocale } from '../../../lib/enums/globals.enums'
import client from '@configs/apolloClient'
import type { GetCourseQuery, GetCourseQueryVariables } from '../../../../graphql/generated/client'
import { GetCourseDocument } from '../../../../graphql/generated/client'
import { LOCALES_GRAPHQL } from '../../../../graphql/constants'
import CoursePageBuilder from '../../../ui/blocks/CoursePageBuilder/CoursePageBuilder'

interface IPageProps {
  params: { lng: string; master: string }
}

export const dynamic = 'force-dynamic'

const Page: FC<IPageProps> = async ({ params: { lng, master } }) => {
  unstable_setRequestLocale(lng)
  const { data } = await client.query<GetCourseQuery, GetCourseQueryVariables>({
    query: GetCourseDocument,
    variables: {
      languageName: LOCALES_GRAPHQL.es,
      id: master
    }
  })

  return (
    <div className="flex justify-center">
      <CoursePageBuilder data={data} />
    </div>
  )
}

export default Page
