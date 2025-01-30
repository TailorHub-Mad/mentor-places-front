import { type FC } from 'react'
import { cx } from '@utils/cx'

interface InfoCardPriceProps {
  infoHeaderTitle: string
  title: string
  description?: string
}

const InfoCardPrice: FC<InfoCardPriceProps> = ({ infoHeaderTitle, title, description }) => {
  return (
    <div className={cx('p-[32px] max-w-full rounded-lg bg-GRAY w-[245px]')}>
      <div className="info-card__header mb-[140px]">
        <span className={cx('font-m text-wrap text-m-mobile md:text-[35px]')}>{infoHeaderTitle}</span>
      </div>
      <div className="info-card__content">
        <h4 className={cx('font-m text-s text-BLACK/60')}>{title}</h4>
        {description && <p className="text-BLACK/60">{description}</p>}
      </div>
    </div>
  )
}

export default InfoCardPrice
