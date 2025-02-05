import type { FC } from 'react'
import HeroPage from '../HeroPage/HeroPage'
import type { TCTAAction } from '@hooks/useAction'
import type { IMuralSectionProps } from '@components/Mural/Mural'
import Mural from '@components/Mural/Mural'
import type { IBannerProps } from '../Banner/Banner'
import Banner from '../Banner/Banner'
import type { IMonthHighlightsProps } from '../MonthHighlights/MonthHighlights'
import MonthHighlights from '../MonthHighlights/MonthHighlights'

export interface IHomePageBuilderProps {
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
