import { type FC } from 'react'
import client from '../lib/configs/apolloClient'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { GetInstitutionsQuery, GetInstitutionsQueryVariables } from '../../graphql/generated/client'
import { GetInstitutionsDocument } from '../../graphql/generated/client'
import { LOCALES_GRAPHQL } from '../../graphql/constants'
import Link from 'next/link'

interface IPageProps {
  params: { lng: string }
}
const Page: FC<IPageProps> = async ({ params: { lng } }) => {
  unstable_setRequestLocale(lng)
  const { data } = await client.query<GetInstitutionsQuery, GetInstitutionsQueryVariables>({
    query: GetInstitutionsDocument,
    variables: {
      languageName: LOCALES_GRAPHQL.es
    }
  })

  return (
    <>
      <h1 className="xl">Universidades</h1>
      {data.institutions.map((institution, idx) => {
        const university = institution?.institution?.[0]
        // const id = university? // not coming from directus
        return (
          <Link href={`/1`} key={university?.commercial_name}>
            <p key={idx}>{university?.commercial_name}</p>
          </Link>
        )
      })}
    </>
  )
}

export default Page
