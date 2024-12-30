import { cx } from '@utils/cx'
import { ScreenIcon } from '../../../../../public/icons/ScreenIcon'
import React from 'react'
import { StarIcon } from '../../../../../public/icons/StarIcon'
import { EuroIcon } from '../../../../../public/icons/EuroIcon'
import { useTranslations } from 'next-intl'
import Button from '@components/Button/Button'
import { ClockIcon } from '../../../../../public/icons/ClockIcon'

export interface AssetCardProps {
  type: 'withIcons' | 'withoutIcons'
  data: {
    title: string
    universityName?: string
    universityLogo?: string
    format?: string
    price?: string
    duration?: string
    ranking?: number
    reviewScore?: number
    imageSrc?: string
    ctaText?: string
    ctaHref?: string
    language?: string
  }
}

export const AssetCard = (props: AssetCardProps) => {
  const { data } = props || {}

  const { title, ranking, duration, ctaText, format, imageSrc, language, price, reviewScore, universityLogo, universityName } = data

  const t = useTranslations()

  return (
    <div className={cx('asset-card__wrapper px-[30px] py-[34px] shadow-md rounded-[8px] bg-WHITE w-[406px] max-w-full')}>
      <AssetCardHeader
        title={title}
        universityName={universityName}
        universityLogo={universityLogo}
        imageSrc={imageSrc}
        ranking={ranking}
      />
      <div className="asset-card__content">
        <AssetFeatureItem label={t('assetCard.format')} text={format} icon={<ScreenIcon />} />
        <AssetFeatureItem label={t('assetCard.reviewScore')} text={reviewScore} icon={<StarIcon />} />
        <AssetFeatureItem label={t('assetCard.price')} text={price} icon={<EuroIcon />} />
        <AssetFeatureItem label={t('assetCard.duration')} text={duration} icon={<ClockIcon />} />
        <AssetFeatureItem label={t('assetCard.language')} text={language} />
      </div>
      <div className="asset-card__footer">
        <Button variant="primary" className="btn btn-secondary">
          {ctaText}
        </Button>
      </div>
    </div>
  )
}

const AssetCardHeader = ({
  title,
  universityName,
  universityLogo,
  imageSrc,
  ranking
}: {
  title: string
  universityName?: string
  universityLogo?: string
  imageSrc?: string
  ranking?: number
}) => {
  return (
    <div className="asset-card__header">
      {imageSrc && (
        <div className="image-wrapper relative">
          {ranking && (
            <span className="absolute -top-4 right-8 px-2.5 py-1 bg-BLUE text-WHITE font-m font-thin rounded-md">Top {ranking}</span>
          )}
          <img className="rounded-[8px] mb-[46px]" src={imageSrc} alt={title} />
        </div>
      )}
      <div className="university-logo flex items-center gap-2">
        {universityLogo && <img src={universityLogo} alt={universityName} />}
        {universityName && <span>{universityName}</span>}
      </div>
      <h3 className="font-m text-m leading-m mb-[38px]">{title}</h3>
    </div>
  )
}

const AssetFeatureItem = ({ label, text, icon }: { label: string; text: string | number | undefined; icon?: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2 border-b border-BLACK/10 py-[10px]">
      {icon}
      <span className="font-s text-s capitalize ">{label}</span>
      <span className="font-s text-s text-BLACK/60">{text}</span>
    </div>
  )
}
