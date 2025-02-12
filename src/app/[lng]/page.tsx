import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import HomePageBuilder from '../ui/blocks/HomePageBuilder/HomePageBuilder'
import { HOME_PAGE_BUILDER_MOCK } from '../ui/blocks/HomePageBuilder/mock'
// import client from '../lib/configs/apolloClient'
// import type { GetInstitutionsQuery, GetInstitutionsQueryVariables } from '../../graphql/generated/client'
// import { GetInstitutionsDocument } from '../../graphql/generated/client'
// import { LOCALES_GRAPHQL } from '../../graphql/constants'

interface IPageProps {
  params: { lng: string }
}
const Page: FC<IPageProps> = async ({ params: { lng } }) => {
  unstable_setRequestLocale(lng)
  // const { data } = await client.query<GetInstitutionsQuery, GetInstitutionsQueryVariables>({
  //   query: GetInstitutionsDocument,
  //   variables: {
  //     languageName: LOCALES_GRAPHQL.es
  //   }
  // })

  return (
    <div className="flex justify-center">
      <HomePageBuilder {...HOME_PAGE_BUILDER_MOCK} />
    </div>
  )
}

export default Page
