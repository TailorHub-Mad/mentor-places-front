import type { IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import type { GetCoursesQuery } from '../../../graphql/generated/client'
import { useFilterCollectionByFields } from '@utils/useFilterCollectionByFields'

export const useCourseFeedMapper = (courses: GetCoursesQuery['courses']): IAssetCardIndexProps[] => {
  const filteredCourses = useFilterCollectionByFields(courses, ['commercial_name'])

  const mappedCourses: IAssetCardIndexProps[] = filteredCourses.map((course) => ({
    title: course.commercial_name,
    assetThumbnailUrl: course?.images || '/images/UAX-university-mentor.png',
    ctaHref: `/courses/${course.id}`,
    details: [
      { type: 'duration', value: course.duration },
      { type: 'format', value: course.type }, //TODO: Where get format course
      { type: 'language', value: 'Español' }, //TODO: Get data from getCourseLanguages hook
      { type: 'campus', value: 'Madrid' }, //TODO: Where get this info
      { type: 'startDate', value: course.start_date },
      { type: 'price', value: course.tuition_price[0] }, //TODO: Change it for new price field
      { type: 'rating', value: 4.4 }
    ]
  }))

  return mappedCourses
}
