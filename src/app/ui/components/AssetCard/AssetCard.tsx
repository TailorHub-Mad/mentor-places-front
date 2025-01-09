import { cx } from '@utils/cx'
import ScreenIcon from '../icons/ScreenIcon'
import type { FC } from 'react'
import React from 'react'
import StarIcon from '../icons/StarIcon'
import EuroIcon from '../icons/EuroIcon'
import { useTranslations } from 'next-intl'
import ClockIcon from '../icons/ClockIcon'
import { AssetCardHeader } from '@components/AssetCard/components/AssetCardHeader'
import { AssetCardFooter } from '@components/AssetCard/components/AssetCardFooter'
import AssetCardFeatureItem from '@components/AssetCard/components/AssetCardFeatureItem'
import type { AssetCardData } from '@interfaces/assetCard.interface'

const AssetCard: FC<AssetCardProps> = (props) => {
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
        <AssetCardFeatureItem variant={variant} label={t('assetCard.language')} text={language} className="border-b border-BLACK/10" />
      </div>
      <AssetCardFooter ctaText={ctaText} variant={variant} universityLogo={universityLogo} universityName={universityName} />
    </div>
  )
}

export default AssetCard

export enum AssetCardVariant {
  withIcons = 'withIcons',
  withoutIcons = 'withoutIcons',
  index = 'index'
}

export interface AssetCardProps {
  variant: AssetCardVariant
  data: AssetCardData
}
