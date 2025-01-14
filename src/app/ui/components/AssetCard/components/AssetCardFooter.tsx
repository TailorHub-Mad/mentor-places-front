import Button from '@components/Button/Button'
import React, { type FC } from 'react'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import Image from 'next/image'

interface AssetCardFooterProps {
  ctaText: string | undefined
  variant: EAssetCardVariant
  universityLogo?: string
  universityName?: string
}

const AssetCardFooter: FC<AssetCardFooterProps> = ({ ctaText, variant, universityLogo, universityName }) => {
  switch (variant) {
    case EAssetCardVariant.withoutIcons:
      return (
        <div className="university-logo flex items-center gap-2 px-[30px] pb-[34px]">
          {universityLogo && <Image src={universityLogo} alt={universityName || ''} width={30} height={30} />}
          {universityName && <span>{universityName}</span>}
        </div>
      )
    case EAssetCardVariant.withIcons:
      return (
        <div className="asset-card__footer px-[30px] pb-[34px]">
          <Button variant="primary">{ctaText}</Button>
        </div>
      )
  }
}

export default AssetCardFooter
