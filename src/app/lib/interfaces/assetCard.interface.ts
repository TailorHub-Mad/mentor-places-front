import type { TCourseDetailType } from '@components/CourseFeaturedDetails/components/CourseDetail'

export interface AssetCardData {
  title: string
  universityName?: string
  universityLogo?: string
  imageSrc?: string
  ctaText?: string
  ctaHref?: string
  ranking?: number
  details?: AssetCardDetail[]
}

export interface AssetCardDetail {
  type: TCourseDetailType
  value: string | number
}
