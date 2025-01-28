import { useTranslations } from 'next-intl'
import React, { FC } from 'react'
import { getStars } from './utils'

export interface IStarsOpinionsProps {
  average: number
  total: number
}

const StarsOpinions: FC<IStarsOpinionsProps> = ({ average, total }) => {
  const t = useTranslations()

  if (average < 0 || average > 5) {
    throw new Error('Input average must be between 0 and 5.')
  }

  const whole = Math.floor(average)
  const decimal = average - whole

  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-1 items-center">{getStars(whole, decimal)}</div>
      <p className="s text-BLACK_60">{`${total} ${t('opinions').toLowerCase()}`}</p>
    </div>
  )
}

export default StarsOpinions
