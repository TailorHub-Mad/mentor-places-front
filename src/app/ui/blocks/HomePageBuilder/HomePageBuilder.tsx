import type { FC } from 'react'
import HeroPage from '../HeroPage/HeroPage'
import { TCTAAction } from '@hooks/useAction'
import Mural, { IMuralSectionProps } from '@components/Mural/Mural'
import Banner, { IBannerProps } from '../Banner/Banner'
import MonthHighlights, { IMonthHighlightsProps } from '../MonthHighlights/MonthHighlights'

interface IHomePageBuilderProps {
  data: {
    hero: {
      title: string
      text: string
      cta: string
      action: TCTAAction
      image: string
    }
    mural: IMuralSectionProps
    banner: IBannerProps
    monthHighlights: IMonthHighlightsProps
  }
}

const HomePageBuilder: FC<IHomePageBuilderProps> = ({ data }) => {
  const { hero, mural, banner, monthHighlights } = data

  return (
    <div className="flex flex-col gap-24 page py-16">
      <HeroPage {...hero} theme={'light'} />
      <Mural {...mural} />
      <Banner {...banner} />
      <MonthHighlights {...monthHighlights} />
    </div>
  )
}

export default HomePageBuilder
