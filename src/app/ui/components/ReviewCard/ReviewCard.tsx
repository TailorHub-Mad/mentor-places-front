import type { FC } from 'react'
import LogoFavicon from '@components/icons/LogoFavicon'

interface ReviewCardProps {
  review: string
  date: string
  rating: number
  studiedAt: string
}

const ReviewCard: FC<ReviewCardProps> = ({ review, rating, studiedAt, date }) => {
  return (
    <div className="review-card flex flex-col">
      <LogoFavicon />
      <div className="review-card__rating">{rating}</div>
      <div className="review-card__review">{review}</div>
      <div className="review-card__footer flex items-center">
        <span>{date}</span>
        <span>{studiedAt}</span>
      </div>
    </div>
  )
}

export default ReviewCard
