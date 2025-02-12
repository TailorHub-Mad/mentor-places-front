import type { ICoursesFeedBlockProps } from './CoursesFeedBlock'
import { ASSET_CARD_INDEX_MOCK } from '@components/AssetCardIndex/mock'

const assetCardArray = Array.from({ length: 10 }).map(() => ASSET_CARD_INDEX_MOCK)

export const COURSES_FEED_BLOCK_MOCK: ICoursesFeedBlockProps = {
  courses: assetCardArray,
  banner: {
    text: 'Find out which Master’s programmes match your personality!',
    cta: 'Haz tu test GRATIS!',
    action: 'contact'
  },
  totalPages: 10,
  totalCourses: 150
}
