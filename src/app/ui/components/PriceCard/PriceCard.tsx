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
    <div
      className={cx('p-[32px] w-full rounded-lg bg-WHITE md:min-w-[245px] flex flex-col justify-between min-h-[264px] md:min-h-[334px]')}>
      <div className="info-card__header">
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
