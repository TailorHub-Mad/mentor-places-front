import type { FC } from 'react'
import { useParams } from 'next/navigation'
import { getLocalizeNumber } from '@utils/getLocalizeNumber'
import useBreakpoint from '@hooks/useBreakpoint'

export interface IStat {
  value: string | number
  title: string
}

export interface IStatsInfoProps {
  stats: IStat[]
}

const StatsInfo: FC<IStatsInfoProps> = ({ stats }) => {
  const { locale } = useParams()
  const { isMobile } = useBreakpoint()

  return (
    <div className="mt-10 md:mt-0 stats-info py-5 flex flex-col md:flex-row flex-wrap items-center justify-between gap-10 md:gap-10">
      {stats.map((stat, index) => {
        const isLast = index !== stats.length - 1
        return (
          <div className="w-full md:w-fit flex flex-col items-center md:block" key={`stats-info__card-${stat.title}-${index}`}>
            <div className="stats-info__card flex flex-col items-center text-center max-w-[130px]">
              <span className="card-title font-xl text-m">{getLocalizeNumber(stat.value, locale as string)}</span>
              <span className="card-value text-BLACK/60 font-s text-s">{stat.title}</span>
            </div>
            {isMobile && isLast && <hr className="border-BLACK/10 w-full mt-10" />}
          </div>
        )
      })}
    </div>
  )
}

export default StatsInfo
