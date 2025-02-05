import { IAssetCardData, IAssetCardDetail } from '@interfaces/assetCard.interface'
import { ICourse, InstitutionCourses } from './InstitutionMasters'

export const transformCourses = (
  courses: InstitutionCourses,
  universityName: string,
  universityLogo: string,
  t: (key: string) => string
): (IAssetCardData & { id: string })[] => {
  return (
    courses?.filter((course) => {
      if (!course?.course_id) return false
      const { course_trans, images } = course.course_id
      return course_trans && course_trans[0]?.commercial_name && images
    }) as ICourse[]
  ).map((course) => {
    const { course_trans, images, learning_format_id, duration, duration_class, tuition_price, is_official, id } = course.course_id
    const details: IAssetCardDetail[] = []

    if (learning_format_id) {
      details.push({
        type: 'format',
        value: learning_format_id.format_name
      })
    }
    if (duration && duration_class) {
      details.push({
        type: 'duration',
        value: `${duration} ${duration_class}`
      })
    }
    if (tuition_price?.[0]) {
      details.push({
        type: 'price',
        value: `${tuition_price[0].tuition_fee_o} ${tuition_price[0].currency}`
      })
    }
    if (typeof is_official === 'boolean') {
      details.push({
        type: 'official',
        value: is_official ? t('actions.yes') : t('actions.no')
      })
    }

    return {
      id,
      title: course_trans[0].commercial_name,
      universityName,
      universityLogo,
      imageSrc: images,
      details: details.length > 0 ? details : undefined
    }
  })
}
