import React, { type FC } from 'react'
import { AssetCardVariant } from '@components/AssetCard/AssetCard'
import { cx } from '@utils/cx'
import type { TCourseDetailType } from '@components/CourseFeaturedDetails/components/CourseDetail'
import { AssetIconsArray } from '@utils/AssetIconsArray'
import { useTranslations } from 'next-intl'
import useBreakpoint from '@hooks/useBreakpoint'

interface AssetCardFeatureItemProps {
  text: string | number | undefined
  type: TCourseDetailType
  variant: AssetCardVariant
  className?: string
}

const AssetDetailCard: FC<AssetCardFeatureItemProps> = ({ text, type, variant, className }) => {
  const t = useTranslations()
  const { isMobile, isVerticalTablet } = useBreakpoint()

  const Icon = AssetIconsArray[type]

  switch (variant) {
    case AssetCardVariant.withIcons:
      return (
        <div className={cx('flex items-center gap-2 border-b border-BLACK/10 py-[10px]', className)}>
          <Icon width={isMobile || isVerticalTablet ? 14 : 24} />
          <span className="font-s text-s capitalize ">{t(`courseDetails.${type}`)}</span>
          <span className="font-s text-s text-BLACK/60">{text}</span>
        </div>
      )
    case AssetCardVariant.withoutIcons:
      return (
        <div className={cx('flex flex-col pb-[20px]', className)}>
          <span className="font-s text-s capitalize text-BLACK/60">{t(`courseDetails.${type}`)}</span>
          <span className="font-m text-m text-BLACK">{text}</span>
        </div>
      )
    case AssetCardVariant.index:
      return (
        <div className="flex flex-col">
          <div className={cx('flex items-center gap-2 border-b border-BLACK/10 py-[10px]', className)}>
            <Icon width={isMobile || isVerticalTablet ? 14 : 24} />
            <span className="font-s text-s ">{text}</span>
          </div>
          <span className="font-s text-s capitalize text-BLACK/60">{t(`courseDetails.${type}`)}</span>
        </div>
      )
  }
}

export default AssetDetailCard
