import LogoFavicon from '@components/icons/LogoFavicon'
import { cx } from '@utils/cx'
import React, { type FC } from 'react'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import Image from 'next/image'
import RankingTag from './RankingTag'

interface AssetCardHeaderProps {
  title: string
  universityName?: string
  universityLogo?: string
  imageSrc?: string
  ranking?: number
  variant: EAssetCardVariant
}

const AssetCardHeader: FC<AssetCardHeaderProps> = ({ title, universityName, universityLogo, imageSrc, ranking, variant }) => {
  switch (variant) {
    case EAssetCardVariant.withIcons:
    case EAssetCardVariant.hero:
      return (
        <div className="asset-card__header px-[30px] pt-[34px]">
          {imageSrc && (
            <div className="image-wrapper relative">
              {ranking && <RankingTag ranking={ranking} />}
              <Image className="rounded-[8px]" src={imageSrc} alt={title} width={500} height={500} />
            </div>
          )}
          {!imageSrc && ranking && <RankingTag ranking={ranking} />}
          {(universityLogo || universityName) && (
            <div className="university-logo flex items-center gap-2 my-[8px]">
              {universityLogo && <Image src={universityLogo} alt={universityName || ''} width={50} height={50} />}
              {universityName && <span>{universityName}</span>}
            </div>
          )}
          <h3 className="font-m text-m leading-m mb-[38px]">{title}</h3>
        </div>
      )
    case EAssetCardVariant.withoutIcons:
      return (
        <div className="">
          <div className="asset-card__header h-[166px] relative mb-[34px]">
            <div className="absolute w-full h-full flex items-center justify-center bg-BLUE rounded-t-lg overflow-hidden">
              <LogoFavicon />
            </div>
          </div>
          <div className="px-[30px]">
            <h3 className="font-m text-m leading-m mb-[20px]">{title}</h3>
            <div className={cx('h-[1px]  bg-BLACK/10 mb-[34px]')} />
          </div>
        </div>
      )
  }
}

export default AssetCardHeader
