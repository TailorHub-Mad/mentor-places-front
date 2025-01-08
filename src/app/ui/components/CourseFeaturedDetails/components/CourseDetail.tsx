'use client'

import AwardIcon from '@components/icons/AwardIcon'
import { ClockIcon } from '@components/icons/ClockIcon'
import LocationIcon from '@components/icons/LocationIcon'
import MessageIcon from '@components/icons/MessageIcon'
import { ScreenIcon } from '@components/icons/ScreenIcon'
import useBreakpoint from '@hooks/useBreakpoint'
import { useTranslations } from 'next-intl'
import type { SVGProps, FC } from 'react'

export type TCourseDetailType = 'duration' | 'format' | 'language' | 'campus' | 'startDate'

interface ICourseDetailProps {
  type: TCourseDetailType
  value: string
}

const icons: Record<TCourseDetailType, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  duration: ClockIcon,
  format: ScreenIcon,
  language: MessageIcon,
  campus: LocationIcon,
  startDate: AwardIcon
}

const CourseDetail: FC<ICourseDetailProps> = ({ type, value }) => {
  const t = useTranslations()
  const { isMobile, isVerticalTablet } = useBreakpoint()
  const Icon = icons[type]

  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon width={isMobile || isVerticalTablet ? 14 : 24} />
        <p className="font-s lg:text-[21px]">{value}</p>
      </div>
      <div className={'bg-BLACK opacity-25 w-full h-px my-2'} />
      <p className="font-s">{t(`courseDetails.${type}`)}</p>
    </div>
  )
}

export default CourseDetail
