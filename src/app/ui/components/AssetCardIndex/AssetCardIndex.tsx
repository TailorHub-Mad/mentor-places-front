import React, { type FC } from 'react'
import Image from 'next/image'
import WishListButton from '@components/WishListButton/WishListButton'
import type { AssetCardData } from '@interfaces/assetCard.interface'
import AssetCardFeatureItem from '@components/AssetCard/components/AssetCardFeatureItem'
import { AssetCardVariant } from '@components/AssetCard/AssetCard'
import { EuroIcon } from '@components/icons/EuroIcon'
import { ScreenIcon } from '@components/icons/ScreenIcon'
import { StarIcon } from '@components/icons/StarIcon'
import { ClockIcon } from '@components/icons/ClockIcon'
import { useTranslations } from 'next-intl'
import Button from '@components/Button/Button'

export interface AssetCardIndexProps extends AssetCardData {
  universityLogo?: string
  universityName?: string
  assetThumbnailUrl?: string
  title: string
}

const AssetCardIndex: FC<AssetCardIndexProps> = (props) => {
  const { universityLogo, universityName, assetThumbnailUrl, title, format, price, duration, ctaText, reviewScore } = props

  const t = useTranslations()

  return (
    <div className="asset-card-index__wrapper flex flex-col md:flex-row">
      <div
        className="asset-card-index__image relative overflow-hidden min-h-[150px] h-auto w-auto md:w-[275px] mb-[32px] md:mr-[50px] rounded-[8px]"
        style={{
          backgroundImage: `url(${assetThumbnailUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}></div>
      <div className="asset-card-index__content flex flex-col flex-grow">
        <div className="asset-card-index__content__header flex flex-row justify-between items-center">
          {(universityLogo || universityName) && (
            <div className="university-logo flex items-center gap-2 my-[8px]">
              {universityLogo && <Image src={universityLogo} alt={universityName || ''} width={50} height={50} />}
              {universityName && <span>{universityName}</span>}
            </div>
          )}
          <WishListButton onClick={() => console.log('Wishlist button clicked')} />
        </div>
        <div className="asset-card-index__content__info">
          <h3 className="font-s text-m">{title}</h3>
          <div className="flex items-center gap-[12px]">
            <AssetCardFeatureItem variant={AssetCardVariant.index} label={t('assetCard.format')} text={format} icon={<ScreenIcon />} />
            <AssetCardFeatureItem
              variant={AssetCardVariant.index}
              label={t('assetCard.reviewScore')}
              text={reviewScore}
              icon={<StarIcon />}
            />
            <AssetCardFeatureItem variant={AssetCardVariant.index} label={t('assetCard.price')} text={price} icon={<EuroIcon />} />
            <AssetCardFeatureItem variant={AssetCardVariant.index} label={t('assetCard.duration')} text={duration} icon={<ClockIcon />} />
          </div>
        </div>
        <div className="asset-card-index__content__footer flex items-center gap-2">
          <Button variant="primary">{ctaText}</Button>
          <div className="checkbox flex items-center">
            <input className="mr-2" type="checkbox" name="asset-card-index" id="asset-card-index" />
            {/* TODO: Add localized string */}
            <label htmlFor="asset-card-index" className="checkbox__label">
              {t('Comparar')}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetCardIndex
