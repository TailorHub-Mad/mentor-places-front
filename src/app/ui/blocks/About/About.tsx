'use client'

import ShowMoreButton from '@components/ShowMoreButton'
import type { IStat } from '@components/StatsInfo/StatsInfo'
import StatsInfo from '@components/StatsInfo/StatsInfo'
import StringToRichText from '@components/StringToRichText/StringToRichText'
import useBreakpoint from '@hooks/useBreakpoint'
import { useState, type FC } from 'react'

interface IAboutProps {
  title: string
  intro: string
  description?: string | null
  stats?: IStat[]
}

const About: FC<IAboutProps> = ({ title, intro, description, stats }) => {
  const { isMobile } = useBreakpoint()
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-[245px]">
      <h2 className="s text-BLACK/60 text-nowrap">{title}</h2>
      <div>
        {!isExpanded && <StringToRichText text={intro} />}
        {description && (
          <>
            {isExpanded && <StringToRichText text={description} />}
            <ShowMoreButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          </>
        )}
        {stats && (
          <>
            {!isMobile && <hr className="border-BLACK/10 mt-14 mb-10" />}
            <StatsInfo stats={stats} />
          </>
        )}
      </div>
    </div>
  )
}

export default About
