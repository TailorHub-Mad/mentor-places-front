import type { FC } from 'react'
import ArrowDownCorner from '@components/icons/ArrowDownCorner'

export interface ICertificationCardProps {
  type: string
  description: string
  source: string
}

const CertificationCard: FC<ICertificationCardProps> = ({ type, description, source }) => {
  return (
    <div className="certification-card px-[24px] py-[29px] bg-YELLOW rounded-[8px] min-h-[273px] flex flex-col justify-between w-full">
      <div className="certification-card__type flex items-center justify-between mb-8">
        <span className="text-m-mobile font-s font-light">{type}</span>
        <ArrowDownCorner />
      </div>
      <div className="certification-card__content">
        <h3 className="font-xl text-m mb-4 leading-[1]">{description}</h3>
        <span className="text-BLACK/60">{source}</span>
      </div>
    </div>
  )
}

export default CertificationCard
