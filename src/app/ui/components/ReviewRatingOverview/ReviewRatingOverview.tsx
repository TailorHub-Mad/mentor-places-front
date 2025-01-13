import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import ReviewRatingOverviewItem from '@components/ReviewRatingOverview/components/ReviewRatingOverviewItem'

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
    <div className="review-card flex flex-col w-full md:w-[556px] md:h-[400px] bg-YELLOW p-[20px] rounded-[8px]">
      <div className="review-rating-overview__header mb-[44px]">
        <span className="text-BLACK/40 text-s">{t('opinions')}</span>
      </div>
      <div className="flex flex-col-reverse gap-4">
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
