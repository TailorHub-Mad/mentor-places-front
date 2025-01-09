import type { FC } from 'react'
import { useTranslations } from 'next-intl'

export interface ReviewRatingOverviewProps {
  reviewsByRate: {
    1: number
    2: number
    3: number
    4: number
    5: number
  }
}

const ReviewRatingOverview: FC<ReviewRatingOverviewProps> = ({ reviewsByRate }) => {
  const t = useTranslations()

  const allReviews = Object.values(reviewsByRate).flat()

  const totalReviews = allReviews.reduce((total, num) => total + num, 0)

  return (
    <div className="review-rating-overview bg-YELLOW p-[20px] flex flex-col flex-grow">
      <div className="review-rating-overview__header ">
        <span className="text-BLACK/40 text-s">{t('opinions')}</span>
      </div>
      <div className="flex flex-col-reverse">
        {allReviews.map((count, index) => (
          <ReviewRatingOverviewItem
            key={`review-rating-overview-item-${count}-${index}`}
            count={count}
            rate={index + 1}
            totalReviews={totalReviews}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewRatingOverview

type ReviewRatingNamesByRateDynamic = {
  [key: number]: string
}

interface ReviewRatingOverviewItemProps {
  rate: number
  count: number
  totalReviews: number
}

const ReviewRatingOverviewItem: FC<ReviewRatingOverviewItemProps> = ({ rate, count, totalReviews }) => {
  const t = useTranslations()

  const reviewRatingNamesByRate: ReviewRatingNamesByRateDynamic = {
    1: t('rating.1'),
    2: t('rating.2'),
    3: t('rating.3'),
    4: t('rating.4'),
    5: t('rating.5')
  }

  const relativeWidth = (count / totalReviews) * 100

  return (
    <div className="review-rating-overview__item flex flex-col">
      <div className="review-rating-overview__item__content flex items-end justify-between">
        <span className="label">{reviewRatingNamesByRate[rate]}</span>
        <span className="">{count}</span>
      </div>
      <div className="bg-BLACK/20 relative h-0.5 flex flex-grow">
        <div
          className="bg-BLACK"
          style={{
            width: `${relativeWidth}%`
          }}></div>
      </div>
    </div>
  )
}
