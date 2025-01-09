import type { ReactNode, SVGProps } from 'react'
import ClockIcon from '@components/icons/ClockIcon'
import ScreenIcon from '@components/icons/ScreenIcon'
import MessageIcon from '@components/icons/MessageIcon'
import LocationIcon from '@components/icons/LocationIcon'
import AwardIcon from '@components/icons/AwardIcon'
import type { TCourseDetailType } from '@components/CourseFeaturedDetails/components/CourseDetail'
import EuroIcon from '@components/icons/EuroIcon'
import StarIcon from '@components/icons/StarIcon'

export const AssetIconsArray: Record<TCourseDetailType, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
  duration: ClockIcon,
  format: ScreenIcon,
  language: MessageIcon,
  campus: LocationIcon,
  startDate: AwardIcon,
  price: EuroIcon,
  rating: StarIcon
}
