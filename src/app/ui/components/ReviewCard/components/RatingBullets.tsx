import type { FC } from 'react'
import { cx } from '@utils/cx'

interface IRatingBulletsProps {
  rating: number
}

const RatingBullets: FC<IRatingBulletsProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    return (
      <div
        key={`rating-bullet-${i}-${rating}`}
        className={cx('p-[8px] border border-BLACK rounded-full', {
          'bg-BLACK': i < rating
        })}></div>
    )
  })
  return <div className="rating-bullet flex items-center gap-[6px]">{stars}</div>
}

export default RatingBullets
