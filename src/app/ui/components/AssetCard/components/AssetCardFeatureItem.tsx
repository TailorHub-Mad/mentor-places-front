import React, { FC } from 'react'
import { AssetCardVariant } from '@components/AssetCard/AssetCard'
import { cx } from '@utils/cx'

interface AssetCardFeatureItemProps {
  label: string
  text: string | number | undefined
  icon?: React.ReactNode
  variant: AssetCardVariant
  className?: string
}

export const AssetCardFeatureItem: FC<AssetCardFeatureItemProps> = ({ label, text, icon, variant, className }) => {
  switch (variant) {
    case AssetCardVariant.withIcons:
      return (
        <div className={cx('flex items-center gap-2 border-b border-BLACK/10 py-[10px]', className)}>
          {icon}
          <span className="font-s text-s capitalize ">{label}</span>
          <span className="font-s text-s text-BLACK/60">{text}</span>
        </div>
      )
    case AssetCardVariant.withoutIcons:
      return (
        <div className={cx('flex flex-col pb-[20px]', className)}>
          <span className="font-s text-s capitalize text-BLACK/60">{label}</span>
          <span className="font-m text-m text-BLACK">{text}</span>
        </div>
      )
  }
}
