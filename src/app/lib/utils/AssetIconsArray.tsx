import type { ReactNode, SVGProps } from 'react'
import ClockIcon from '@components/icons/ClockIcon'
import ScreenIcon from '@components/icons/ScreenIcon'
import MessageIcon from '@components/icons/MessageIcon'
import LocationIcon from '@components/icons/LocationIcon'
import CalendarIcon from '@components/icons/CalendarIcon'
import EuroIcon from '@components/icons/EuroIcon'
import StarIcon from '@components/icons/StarIcon'
import type { TAssetDetailType } from '@interfaces/assetDetail.type'
import MedalIcon from '@components/icons/MedalIcon'

export const AssetIconsArray: Record<TAssetDetailType, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
  duration: ClockIcon,
  format: ScreenIcon,
  language: MessageIcon,
  campus: LocationIcon,
  startDate: CalendarIcon,
  price: EuroIcon,
  rating: StarIcon,
  official: MedalIcon
}
