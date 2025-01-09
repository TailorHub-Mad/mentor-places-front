import type { FC } from 'react'
import LogoFavicon from '@components/icons/LogoFavicon'
import { cx } from '@utils/cx'
import { useDateString } from '@hooks/useDateString'

interface ReviewCardProps {
  review: string
  enrolledTo: string
  rating: number
  date: string
}

const ReviewCard: FC<ReviewCardProps> = ({ review, rating, date, enrolledTo }) => {
  const dateObj = new Date(date)

  const localizedShortMonthYear = useDateString({
    date: dateObj,
    options: {
      month: 'short',
      year: 'numeric'
    }
  })

  return (
    <div className="review-card flex flex-col w-full md:w-[438px] md:h-[400px] bg-BLUE/40 p-[20px] rounded-[8px]">
      <LogoFavicon width={50} height={50} strokeBg={'black'} />
      <div className="review-card__content flex flex-col flex-grow justify-end gap-[22px]">
        <div className="review-card__rating">
          <RatingBullet rating={rating} />
        </div>
        <div className="review-card__review font-s text-m-mobile font-thin">{review}</div>
        <div className="review-card__footer flex items-center text-BLACK/60 text-s">
          {date && <span className="capitalize">{localizedShortMonthYear}</span>}
          {enrolledTo && <span>&nbsp;- {enrolledTo}</span>}
        </div>
      </div>
    </div>
  )
}

export default ReviewCard

const RatingBullet: FC<{ rating: number }> = ({ rating }) => {
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
