import { cx } from '@utils/cx'
import type { FC } from 'react'
import React from 'react'
import { AssetCardHeader } from '@components/AssetCard/components/AssetCardHeader'
import { AssetCardFooter } from '@components/AssetCard/components/AssetCardFooter'
import AssetDetailCard from '@components/AssetCard/components/AssetDetailCard'
import type { AssetCardData } from '@interfaces/assetCard.interface'

const AssetCard: FC<AssetCardProps> = (props) => {
  const { data, variant } = props || {}

  const { title, ctaText, imageSrc, universityLogo, universityName, ranking, details } = data

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
      {details && (
        <div className="asset-card__content mb-[30px] px-[30px]">
          {details.map((item, index) => (
            <AssetDetailCard variant={variant} text={item.value} type={item.type} key={`asset-card-feature-item-${item.type + index}`} />
          ))}
        </div>
      )}
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
