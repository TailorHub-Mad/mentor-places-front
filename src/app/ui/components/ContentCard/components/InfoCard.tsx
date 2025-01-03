import { FC } from 'react'
import { cx } from '@utils/cx'
import { ContentCardVariant } from '@components/ContentCard/ContentCard'

interface InfoCardProps {
  variant: ContentCardVariant
  infoHeaderTitle: string
  title: string
  description?: string
}

export const InfoCard: FC<InfoCardProps> = ({ variant, infoHeaderTitle, title, description }) => {
  return (
    <div
      className={cx('p-[32px] max-w-full', {
        'bg-GRAY w-[245px]': variant === ContentCardVariant.INFO_CARD_PRICE,
        'bg-YELLOW w-[437px]': variant === ContentCardVariant.INFO_CARD_NUMBER
      })}>
      <div className="info-card__header mb-[140px]">
        <span
          className={cx('font-m text-wrap', {
            'text-xl': variant === ContentCardVariant.INFO_CARD_NUMBER,
            'text-m-mobile md:text-[35px]': variant === ContentCardVariant.INFO_CARD_PRICE
          })}>
          {infoHeaderTitle}
        </span>
      </div>
      <div className="info-card__content">
        <h4
          className={cx('font-m', {
            'text-m': variant === ContentCardVariant.INFO_CARD_NUMBER,
            'text-s text-BLACK/60': variant === ContentCardVariant.INFO_CARD_PRICE
          })}>
          {title}
        </h4>
        {description && <p className="text-BLACK/60">{description}</p>}
      </div>
    </div>
  )
}
