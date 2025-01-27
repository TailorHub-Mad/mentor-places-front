import type { FC } from 'react'

export interface ISurveyStatCardProps {
  question: string
  stats: {
    label: string
    value: string
  }[]
}

const SurveyStatCard: FC<ISurveyStatCardProps> = ({ question, stats }) => {
  return (
    <div className="survey-stat-card p-[13px] md:p-[32px] min-h-[212px] md:min-h-[262px] flex flex-col justify-between rounded-[8px] bg-WHITE">
      <div className="survey-stat-card__question">
        <h3 className="text-s md:text-[18px] text-BLACK/60 font-s">{question}</h3>
      </div>
      <div className="survey-stat-card__stats flex items-center gap-2 md:gap-6">
        {stats.map((stat, index) => (
          <div key={`stat-card-${index}-${stat.label}`} className="stat-card flex flex-col">
            <span className="stat-card__value text-m-mobile md:text-m font-xl">{stat.value}</span>
            <span className="stat-card__label font-s text-s text-BLACK/60">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SurveyStatCard
