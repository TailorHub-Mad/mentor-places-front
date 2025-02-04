import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: FC = async ({ params: { lng } }: any) => {
  unstable_setRequestLocale(lng)

  return (
    <>
      <h1>Page</h1>
    </>
  )
}

export default Page
