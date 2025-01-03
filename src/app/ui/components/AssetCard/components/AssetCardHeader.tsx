import { LogoFavicon } from '@components/icons/LogoFavicon'
import { cx } from '@utils/cx'
import React, { FC } from 'react'
import { AssetCardVariant } from '@components/AssetCard/AssetCard'
import Image from 'next/image'

interface AssetCardHeaderProps {
  title: string
  universityName?: string
  universityLogo?: string
  imageSrc?: string
  ranking?: number
  variant: AssetCardVariant
}

export const AssetCardHeader: FC<AssetCardHeaderProps> = ({ title, universityName, universityLogo, imageSrc, ranking, variant }) => {
  switch (variant) {
    case AssetCardVariant.withIcons:
      return (
        <div className="asset-card__header px-[30px] pt-[34px]">
          {imageSrc && (
            <div className="image-wrapper relative">
              {ranking && (
                <span className="absolute -top-4 right-8 px-2.5 py-1 bg-BLUE text-WHITE font-m font-thin rounded-md">Top {ranking}</span>
              )}
              <Image className="rounded-[8px]" src={imageSrc} alt={title} width={500} height={500} />
            </div>
          )}
          {(universityLogo || universityName) && (
            <div className="university-logo flex items-center gap-2 my-[8px]">
              {universityLogo && <Image src={universityLogo} alt={universityName || ''} width={50} height={50} />}
              {universityName && <span>{universityName}</span>}
            </div>
          )}
          <h3 className="font-m text-m leading-m mb-[38px]">{title}</h3>
        </div>
      )
    case AssetCardVariant.withoutIcons:
      return (
        <div className="">
          <div className="asset-card__header h-[166px] relative mb-[34px]">
            <div className="absolute w-full h-full flex items-center justify-center bg-BLUE">
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
