import type { FC } from 'react'
import { useParams } from 'next/navigation'
import { getLocalizeNumber } from '@utils/getLocalizeNumber'

export interface IStat {
  value: string | number
  title: string
}

export interface IStatsInfoProps {
  stats: IStat[]
}

const StatsInfo: FC<IStatsInfoProps> = ({ stats }) => {
  const { locale } = useParams()

  return (
    <div className="stats-info py-5 flex flex-wrap items-start justify-between gap-6 md:gap-10">
      {stats.map((stat, index) => (
        <div
          key={`stats-info__card-${stat.title}-${index}`}
          className="stats-info__card flex flex-col items-center text-center max-w-[130px]">
          <span className="card-title font-xl text-m">{getLocalizeNumber(stat.value, locale as string)}</span>
          <span className="card-value text-BLACK/60 font-s text-s">{stat.title}</span>
        </div>
      ))}
    </div>
  )
}

export default StatsInfo
