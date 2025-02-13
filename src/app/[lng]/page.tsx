import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import HomePageBuilder from '../ui/blocks/HomePageBuilder/HomePageBuilder'
import { HOME_PAGE_BUILDER_MOCK } from '../ui/blocks/HomePageBuilder/mock'

interface IPageProps {
  params: { lng: string }
}
const Page: FC<IPageProps> = async ({ params: { lng } }) => {
  unstable_setRequestLocale(lng)

  return (
    <div className="flex justify-center">
      <HomePageBuilder {...HOME_PAGE_BUILDER_MOCK} />
    </div>
  )
}

export default Page
