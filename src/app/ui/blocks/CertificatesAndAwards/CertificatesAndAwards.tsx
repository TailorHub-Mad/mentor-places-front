import CertificationCard, { ICertificationCardProps } from '@components/CertificationCard/CertificationCard'
import type { FC } from 'react'

interface ICertificatesAndAwardsProps {
  title: string
  cards: ICertificationCardProps[]
}

const CertificatesAndAwards: FC<ICertificatesAndAwardsProps> = ({ title, cards }) => {
  return (
    <div>
      <h3 className="text-l-mobile font-l-mobile md:text-l md:font-l">{title}</h3>
      <div className="flex flex-col md:flex-row gap-5 mt-9 md:mt-16">
        {cards.map((card, idx) => {
          return <CertificationCard {...card} key={`${card.description}-${idx}`} />
        })}
      </div>
    </div>
  )
}

export default CertificatesAndAwards
