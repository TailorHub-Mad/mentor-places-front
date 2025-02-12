import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { ELocale } from '../../../lib/enums/globals.enums'
import client from '@configs/apolloClient'
import type { GetCourseQuery, GetCourseQueryVariables } from '../../../../graphql/generated/client'
import { GetCourseDocument } from '../../../../graphql/generated/client'
import { LOCALES_GRAPHQL } from '../../../../graphql/constants'
import CoursePageBuilder from '../../../ui/blocks/CoursePageBuilder/CoursePageBuilder'

interface IPageProps {
  params: { lng: string; master: string }
}

const Page: FC<IPageProps> = async ({ params: { lng, master } }) => {
  unstable_setRequestLocale(lng)
  const { data } = await client.query<GetCourseQuery, GetCourseQueryVariables>({
    query: GetCourseDocument,
    variables: {
      languageName: LOCALES_GRAPHQL.es,
      id: master
    }
  })

  return <CoursePageBuilder data={data} />
}

export default Page

export async function generateStaticParams({ params: { locale } }: { params: { locale: ELocale } }) {
  const mock: Record<ELocale, Record<string, string[]>> = {
    es: {
      ['1']: ['1', '2']
    },
    en: {
      ['1']: ['1', '2']
    }
  }

  const masterPaths: { lng: ELocale; university: string; master: string }[] = [] // TODO

  Object.entries(mock[locale]).forEach(([university, masters]) => {
    masters.forEach((master) => {
      masterPaths.push({
        lng: locale,
        university,
        master
      })
    })
  })

  return masterPaths
}
