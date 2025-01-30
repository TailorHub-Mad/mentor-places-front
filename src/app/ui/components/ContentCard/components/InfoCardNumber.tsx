import { type FC } from 'react'
import { cx } from '@utils/cx'

interface InfoCardNumberProps {
  infoHeaderTitle: string
  title: string
  description?: string
}

const InfoCardNumber: FC<InfoCardNumberProps> = ({ infoHeaderTitle, title, description }) => {
  return (
    <div className={cx('p-[32px] w-full rounded-lg bg-YELLOW  flex flex-col justify-between h-[478px] md:h-[458px]')}>
      <div className="info-card__header ">
        <span className={cx('font-m text-wrap text-xl')}>{infoHeaderTitle}</span>
      </div>
      <div className="info-card__content">
        <h4 className={cx('font-m text-m')}>{title}</h4>
        {description && <p className="text-BLACK/60">{description}</p>}
      </div>
    </div>
  )
}

export default InfoCardNumber
