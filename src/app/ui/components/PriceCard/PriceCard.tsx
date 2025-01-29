import { type FC } from 'react'
import { cx } from '@utils/cx'
import { EColor } from '@theme/foundations/colors.foundations'

export interface InfoCardPriceProps {
  infoHeaderTitle: string
  title: string
  type: 'official' | 'discount'
}

const InfoCardPrice: FC<InfoCardPriceProps> = ({ infoHeaderTitle, title, type }) => {
  return (
    <div className={cx('p-[32px] w-full rounded-lg bg-WHITE')}>
      <div className="info-card__header mb-[140px]">
        <span
          className={cx('font-m text-wrap text-m-mobile md:text-[35px]')}
          style={{ color: type === 'official' ? EColor.BLACK : EColor.BLUE }}>
          {infoHeaderTitle}
        </span>
      </div>
      <div className="info-card__content">
        <h4 className={cx('font-m text-s text-BLACK/60')}>{title}</h4>
      </div>
    </div>
  )
}

export default InfoCardPrice
