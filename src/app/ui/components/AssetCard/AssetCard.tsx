import { cx } from '@utils/cx'
import type { FC } from 'react'
import React from 'react'
import AssetCardHeader from '@components/AssetCard/components/AssetCardHeader'
import AssetCardFooter from '@components/AssetCard/components/AssetCardFooter'
import AssetDetailCard from '@components/AssetCard/components/AssetDetailCard'
import type { IAssetCardData } from '@interfaces/assetCard.interface'

const AssetCard: FC<IAssetCardProps> = (props) => {
  const { data, variant } = props

  const { title, ctaText, imageSrc, universityLogo, universityName, ranking, details, description } = data

  return (
    <div
      className={cx('asset-card__wrapper shadow-md rounded-[8px] bg-WHITE w-[406px] max-w-full relative', {
        'w-[666px]': variant === EAssetCardVariant.hero
      })}>
      <AssetCardHeader
        variant={variant}
        title={title || ''}
        universityName={universityName}
        universityLogo={universityLogo}
        imageSrc={imageSrc}
        ranking={ranking}
      />
      {details && (
        <div className="asset-card__content mb-[30px] px-[30px]">
          {details.map((item, index) => (
            <AssetDetailCard
              variant={variant}
              text={item.value || ''}
              type={item.type}
              key={`asset-card-feature-item-${item.type + index}`}
            />
          ))}
        </div>
      )}
      <AssetCardFooter
        ctaText={ctaText}
        variant={variant}
        universityLogo={universityLogo}
        universityName={universityName}
        description={description || ''}
      />
    </div>
  )
}

export default AssetCard

export enum EAssetCardVariant {
  withIcons = 'withIcons',
  withoutIcons = 'withoutIcons',
  index = 'index',
  hero = 'hero'
}

export interface IAssetCardProps {
  variant: EAssetCardVariant
  data: IAssetCardData
}
