import type { TCourseDetailType } from '@components/CourseFeaturedDetails/components/CourseDetail'

export interface IAssetCardData {
  title: string
  universityName?: string
  universityLogo?: string
  imageSrc?: string
  ctaText?: string
  ctaHref?: string
  ranking?: number
  details?: IAssetCardDetail[]
}

export interface IAssetCardDetail {
  type: TCourseDetailType
  value: string | number
}
