import RichText from '@components/RichText/RichText'
import StatsInfo, { IStat } from '@components/StatsInfo/StatsInfo'
import useBreakpoint from '@hooks/useBreakpoint'
import { EColor } from '@theme/foundations/colors.foundations'
import type { FC } from 'react'

interface IAboutProps {
  title: string
  text: string
  stats: IStat[]
}

const About: FC<IAboutProps> = ({ title, text, stats }) => {
  const { isMobile } = useBreakpoint()
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-[245px]">
      <h2 className="s text-BLACK/60 text-nowrap">{title}</h2>
      <div>
        <RichText content={text} maxLines={6} color={EColor.BLACK} />
        {!isMobile && <hr className="border-BLACK/10 mt-14 mb-10" />}
        <StatsInfo stats={stats} />
      </div>
    </div>
  )
}

export default About
