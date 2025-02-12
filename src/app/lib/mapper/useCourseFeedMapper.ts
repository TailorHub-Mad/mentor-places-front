import type { IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import type { FilterCoursesQuery } from '../../../graphql/generated/client'
import { useFilterCollectionByFields } from '@utils/useFilterCollectionByFields'

export const useCourseFeedMapper = (courses: FilterCoursesQuery['courses']): IAssetCardIndexProps[] => {
  const coursesTransformed = courses.map((course) => ({
    ...(course.course_trans?.[0] || {}) // course_trans is always length === 1 by design
  }))

  const filteredCourses = useFilterCollectionByFields(coursesTransformed, ['commercial_name'])

  return filteredCourses.flatMap((course) => ({
    title: course?.commercial_name ?? '',
    assetThumbnailUrl: course?.course_id?.images ?? '/images/UAX-university-mentor.png',
    ctaHref: course?.course_id ? `/courses/${course.course_id}` : '#',
    universityName: course?.course_id?.campuses_courses?.[0]?.campuses_id?.campuses_trans?.[0]?.name ?? '',
    universityLogo: course?.course_id?.institutions?.[0]?.institution_id?.logo || '/images/default-logo.png',
    details: [
      { type: 'duration', value: getFormattedDuration(course?.course_id?.duration, course?.course_id?.duration_class) },
      { type: 'format', value: course?.course_id?.learning_format?.[0]?.learning_format_id?.format_name },
      { type: 'language', value: course?.course_id?.course_language?.[0]?.languages_format_id?.name },
      { type: 'campus', value: course?.course_id?.campuses_courses?.[0]?.campuses_id?.campuses_trans?.[0]?.name },
      { type: 'startDate', value: course?.course_id?.start_date },
      { type: 'price', value: course?.course_id?.average_price }
    ]
  }))
}

const getFormattedDuration = (duration?: string | null, durationClass?: string | null) => {
  const adjustedDurationClass = duration === '1' ? durationClass?.slice(0, -1) : durationClass
  return `${duration} ${adjustedDurationClass}`
}
