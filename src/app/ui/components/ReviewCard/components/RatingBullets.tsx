import type { FC } from 'react'
import { cx } from '@utils/cx'

const RatingBullets: FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    return (
      <div
        key={`raging-bullet-${i}`}
        className={cx('p-[8px] border border-BLACK rounded-full', {
          'bg-BLACK': i < rating
        })}></div>
    )
  })
  return <div className="rating-bullet flex items-center gap-[6px]">{stars}</div>
}

export default RatingBullets
