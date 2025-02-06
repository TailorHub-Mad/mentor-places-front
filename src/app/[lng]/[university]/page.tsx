import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { ELocale } from '../../lib/enums/globals.enums'
import client from '@configs/apolloClient'
import type { GetUniversityQuery, GetUniversityQueryVariables } from '../../../graphql/generated/client'
import { GetUniversityDocument } from '../../../graphql/generated/client'
import { LOCALES_GRAPHQL } from '../../../graphql/constants'
import InstitutionPageBuilder from '../../ui/blocks/InstitutionPageBuilder/InstitutionPageBuilder'

interface IPageProps {
  params: { lng: string; university: string }
}

const Page: FC<IPageProps> = async ({ params: { lng, university } }) => {
  unstable_setRequestLocale(lng)
  const { data } = await client.query<GetUniversityQuery, GetUniversityQueryVariables>({
    query: GetUniversityDocument,
    variables: {
      languageName: LOCALES_GRAPHQL.es,
      id: university
    }
  })

  return <InstitutionPageBuilder data={data} />
}

export default Page

export async function generateStaticParams({ params: { locale } }: { params: { locale: ELocale } }) {
  const mock: Record<ELocale, string[]> = {
    es: ['1'],
    en: ['1']
  }
  const universities: string[] = mock[locale] // TODO

  const universityPaths: { lng: ELocale; university: string }[] = []

  universities.forEach((university) => {
    universityPaths.push({
      lng: locale,
      university
    })
  })

  return universityPaths
}
