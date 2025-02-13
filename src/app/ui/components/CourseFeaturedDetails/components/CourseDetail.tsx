'use client'

import useBreakpoint from '@hooks/useBreakpoint'
import { useTranslations } from 'next-intl'
import React, { type FC } from 'react'
import { AssetIconsArray } from '@utils/AssetIconsArray'
import type { TAssetDetailType } from '@interfaces/assetDetail.type'

interface ICourseDetailProps {
  type: string
  value: string
}

const CourseDetail: FC<ICourseDetailProps> = ({ type, value }) => {
  const t = useTranslations()
  const { isMobile, isVerticalTablet } = useBreakpoint()
  const Icon = AssetIconsArray[type as TAssetDetailType]

  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon width={isMobile || isVerticalTablet ? 14 : 24} />
        <p className="font-s lg:text-[21px] line-clamp-1">{value}</p>
      </div>
      <div className={'bg-BLACK opacity-25 w-full h-px my-2'} />
      <p className="font-s">{t(`courseDetails.${type}`)}</p>
    </div>
  )
}

export default CourseDetail
