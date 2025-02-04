import { ESortDirection } from '../../../lib/enums/globals.enums'
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
  page: 1,
  totalPages: 10,
  totalCourses: 150,
  handlePageChange: function (page: number): void {
    console.log('handlePageChange called with ', { page })
  },
  sortOptions: [
    {
      value: 'recomended',
      label: 'Recomendado'
    },
    {
      value: 'date',
      label: 'Fecha'
    },
    {
      value: 'title',
      label: 'Title'
    }
  ],
  sortOption: 'recomended',
  sortOrder: ESortDirection.ASC,
  handleSortChange: function (props: { sort: string; order: ESortDirection }): void {
    console.log('Function not implemented.', { props })
  }
}
