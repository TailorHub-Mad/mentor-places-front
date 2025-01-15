import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import type { TRating, TReviewRatingNamesByRateDynamic } from '@components/ReviewRatingOverview/components/ReviewRatingOverviewItem'
import ReviewRatingOverviewItem from '@components/ReviewRatingOverview/components/ReviewRatingOverviewItem'

export interface ReviewRatingOverviewProps {
  reviewsByRate: TReviewRatingNamesByRateDynamic
}

const ReviewRatingOverview: FC<ReviewRatingOverviewProps> = ({ reviewsByRate }) => {
  const t = useTranslations()

  const allReviews = Object.values(reviewsByRate).map((value) => Number(value))
  const totalReviews = allReviews.reduce((total, num) => total + (isNaN(num) ? 0 : num), 0)

  return (
    <div className="review-card flex flex-col w-full md:w-[556px] md:h-[400px] bg-YELLOW p-[20px] rounded-[8px]">
      <div className="review-rating-overview__header mb-[44px]">
        <span className="text-BLACK/40 text-s">{t('opinions')}</span>
      </div>
      <div className="flex flex-col-reverse gap-4">
        {allReviews.map((count, index) => (
          <ReviewRatingOverviewItem
            key={`review-rating-overview-item-${count}-${index}`}
            count={Number(count)}
            rate={(index + 1) as TRating}
            totalReviews={Number(totalReviews)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewRatingOverview
