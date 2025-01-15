import type { FC } from 'react'
import { useTranslations } from 'next-intl'

export type TRating = 1 | 2 | 3 | 4 | 5

export type TReviewRatingNamesByRateDynamic = Record<TRating, number | string>

interface ReviewRatingOverviewItemProps {
  rate: TRating
  count: number
  totalReviews: number
}

const ReviewRatingOverviewItem: FC<ReviewRatingOverviewItemProps> = ({ rate, count, totalReviews }) => {
  const t = useTranslations()

  const reviewRatingNamesByRate: TReviewRatingNamesByRateDynamic = {
    1: t('rating.1'),
    2: t('rating.2'),
    3: t('rating.3'),
    4: t('rating.4'),
    5: t('rating.5')
  }

  const relativeWidth = (count / totalReviews) * 100

  return (
    <div className="review-rating-overview__item flex flex-col">
      <div className="review-rating-overview__item__content flex items-end justify-between mb-[11px]">
        <span className="label">{reviewRatingNamesByRate[rate]}</span>
        <span className="">{count}</span>
      </div>
      <div className="bg-BLACK/20 relative h-[1px] flex flex-grow">
        <div
          className="bg-BLACK"
          style={{
            width: `${relativeWidth}%`
          }}></div>
      </div>
    </div>
  )
}

export default ReviewRatingOverviewItem
