import { type FC } from 'react'
// import client from '../lib/configs/apolloClient'
import { unstable_setRequestLocale } from 'next-intl/server'
// import { GetCoursesDocument, GetCoursesQuery, GetCoursesQueryVariables } from '../../graphql/generated/client'
import CourseFeaturedDetails from '@components/CourseFeaturedDetails/CourseFeaturedDetails'
// import TestComponent from '@components/TestComponent'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: FC = async ({ params: { lng } }: any) => {
  unstable_setRequestLocale(lng)
  // const { data } = await client.query<GetCoursesQuery, GetCoursesQueryVariables>({
  //   query: GetCoursesDocument,
  //   variables: {
  //     filter: {
  //       id: {
  //         _eq: 'C002'
  //       }
  //     }
  //   }
  // })

  const details = {
    duration: '9 meses',
    format: 'Presencial',
    language: 'Español',
    campus: 'Madrid',
    startDate: '25 agosto'
  }

  return (
    <>
      <h1>Page</h1>
      <CourseFeaturedDetails {...details} />
      {/* <p>{data.courses[0].id}</p>
      <TestComponent /> */}
    </>
  )
}

export default Page
