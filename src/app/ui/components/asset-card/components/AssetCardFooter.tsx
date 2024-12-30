import Button from '@components/Button/Button'
import React, { FC } from 'react'
import { AssetCardVariant } from '@components/asset-card/AssetCard'

interface AssetCardFooterProps {
  ctaText: string | undefined
  variant: AssetCardVariant
  universityLogo?: string
  universityName?: string
}

export const AssetCardFooter: FC<AssetCardFooterProps> = ({ ctaText, variant, universityLogo, universityName }) => {
  if (!ctaText) return null

  switch (variant) {
    case AssetCardVariant.withoutIcons:
      return (
        <div className="university-logo flex items-center gap-2 px-[30px] pb-[34px]">
          {universityLogo && <img src={universityLogo} alt={universityName} />}
          {universityName && <span>{universityName}</span>}
        </div>
      )
    case AssetCardVariant.withIcons:
      return (
        <div className="asset-card__footer px-[30px] pb-[34px]">
          <Button variant="primary">{ctaText}</Button>
        </div>
      )
  }
}
