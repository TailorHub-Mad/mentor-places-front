import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import React from 'react'
import { getStars } from './utils'

export interface IStarsOpinionsProps {
  average: number
  total: number
}

const StarsOpinions: FC<IStarsOpinionsProps> = ({ average, total }) => {
  const t = useTranslations()

  const whole = Math.floor(average)
  const decimal = average - whole

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
      <div className="flex gap-4 items-center">
        <span className="s text-BLACK">{average}</span>
        <div className="flex gap-1 items-center">{getStars(whole, decimal)}</div>
      </div>
      <span className="s text-BLACK/60">{`${total} ${t('opinions').toLowerCase()}`}</span>
    </div>
  )
}

export default StarsOpinions
