import { type FC } from 'react'
import client from '../lib/configs/apolloClient'
import { unstable_setRequestLocale } from 'next-intl/server'
import { GetCoursesDocument, GetCoursesQuery, GetCoursesQueryVariables } from '../../graphql/generated/client'
import TestComponent from '@components/TestComponent'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: FC = async ({ params: { lng } }: any) => {
  unstable_setRequestLocale(lng)
  const { data } = await client.query<GetCoursesQuery, GetCoursesQueryVariables>({
    query: GetCoursesDocument,
    variables: {
      filter: {
        id: {
          _eq: 'C002'
        }
      }
    }
  })

  return (
    <>
      <h1>Page</h1>
      <p>{data.courses[0].id}</p>
      <TestComponent />
    </>
  )
}

export default Page
