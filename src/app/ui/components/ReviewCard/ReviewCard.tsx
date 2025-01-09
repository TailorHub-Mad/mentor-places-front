import type { FC } from 'react'
import LogoFavicon from '@components/icons/LogoFavicon'
import { useLocaleDateString } from '@hooks/useDateString'
import RatingBullets from '@components/ReviewCard/components/RatingBullets'

interface ReviewCardProps {
  review: string
  enrolledTo: string
  rating: number
  date: string
}

const ReviewCard: FC<ReviewCardProps> = ({ review, rating, date, enrolledTo }) => {
  const dateObj = new Date(date)

  const localizedDateString = useLocaleDateString({
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
          <RatingBullets rating={rating} />
        </div>
        <div className="review-card__review font-s text-m-mobile font-thin">{review}</div>
        <div className="review-card__footer flex items-center text-BLACK/60 text-s">
          <span className="capitalize">{localizedDateString}</span>
          <span>&nbsp;- {enrolledTo}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
