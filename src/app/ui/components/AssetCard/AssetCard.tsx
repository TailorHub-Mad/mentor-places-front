import { cx } from '@utils/cx'
import { ScreenIcon } from '../icons/ScreenIcon'
import React, { FC } from 'react'
import { StarIcon } from '../icons/StarIcon'
import { EuroIcon } from '../icons/EuroIcon'
import { useTranslations } from 'next-intl'
import { ClockIcon } from '../icons/ClockIcon'
import { AssetCardHeader } from '@components/AssetCard/components/AssetCardHeader'
import { AssetCardFooter } from '@components/AssetCard/components/AssetCardFooter'
import { AssetCardFeatureItem } from '@components/AssetCard/components/AssetCardFeatureItem'

export const AssetCard: FC<AssetCardProps> = (props) => {
  const { data, variant } = props || {}

  const { title, ranking, duration, ctaText, format, imageSrc, language, price, reviewScore, universityLogo, universityName } = data

  const t = useTranslations()

  return (
    <div className={cx('asset-card__wrapper shadow-md rounded-[8px] bg-WHITE w-[406px] max-w-full relative')}>
      <AssetCardHeader
        variant={variant}
        title={title}
        universityName={universityName}
        universityLogo={universityLogo}
        imageSrc={imageSrc}
        ranking={ranking}
      />
      <div className="asset-card__content mb-[30px] px-[30px]">
        <AssetCardFeatureItem variant={variant} label={t('assetCard.format')} text={format} icon={<ScreenIcon />} />
        <AssetCardFeatureItem variant={variant} label={t('assetCard.reviewScore')} text={reviewScore} icon={<StarIcon />} />
        <AssetCardFeatureItem variant={variant} label={t('assetCard.price')} text={price} icon={<EuroIcon />} />
        <AssetCardFeatureItem variant={variant} label={t('assetCard.duration')} text={duration} icon={<ClockIcon />} />
        <AssetCardFeatureItem variant={variant} label={t('assetCard.language')} text={language} />
      </div>
      <AssetCardFooter ctaText={ctaText} variant={variant} />
    </div>
  )
}

export enum AssetCardVariant {
  withIcons = 'withIcons',
  withoutIcons = 'withoutIcons'
}

export interface AssetCardProps {
  variant: AssetCardVariant
  data: {
    title: string
    universityName?: string
    universityLogo?: string
    format?: string
    price?: string
    duration?: string
    ranking?: number
    reviewScore?: number
    imageSrc?: string
    ctaText?: string
    ctaHref?: string
    language?: string
  }
}
