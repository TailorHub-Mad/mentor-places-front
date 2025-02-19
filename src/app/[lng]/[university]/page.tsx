import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { ELocale } from '../../lib/enums/globals.enums'
import client from '@configs/apolloClient'
import {
  GetUniversityDocument,
  IdInstitutionsDocument,
  type IdInstitutionsQuery,
  type GetUniversityQuery,
  type GetUniversityQueryVariables
} from '../../../graphql/generated/client'
import { LOCALES_GRAPHQL } from '../../../graphql/constants'
import InstitutionPageBuilder from '../../ui/blocks/InstitutionPageBuilder/InstitutionPageBuilder'

export const revalidate = 3600
interface IPageProps {
  params: { lng: string; university: string }
}

export const dynamic = 'force-dynamic'

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
  const { data } = await client.query<IdInstitutionsQuery>({
    query: IdInstitutionsDocument
  })

  const universities: string[] = data.institutions.map((institution) => institution.id)

  const universityPaths: { lng: ELocale; university: string }[] = []

  universities.forEach((university) => {
    universityPaths.push({
      lng: locale,
      university
    })
  })

  return universityPaths
}
