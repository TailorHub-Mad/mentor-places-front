import React, { FC } from 'react'
import { AssetCardVariant } from '@components/asset-card/AssetCard'

interface AssetCardFeatureItemProps {
  label: string
  text: string | number | undefined
  icon?: React.ReactNode
  variant: AssetCardVariant
}

export const AssetCardFeatureItem: FC<AssetCardFeatureItemProps> = ({ label, text, icon, variant }) => {
  switch (variant) {
    case AssetCardVariant.withIcons:
      return (
        <div className="flex items-center gap-2 border-b border-BLACK/10 py-[10px]">
          {icon}
          <span className="font-s text-s capitalize ">{label}</span>
          <span className="font-s text-s text-BLACK/60">{text}</span>
        </div>
      )
    case AssetCardVariant.withoutIcons:
      return (
        <div className="flex flex-col pb-[20px]">
          <span className="font-s text-s capitalize text-BLACK/60">{label}</span>
          <span className="font-m text-m text-BLACK">{text}</span>
        </div>
      )
  }
}
