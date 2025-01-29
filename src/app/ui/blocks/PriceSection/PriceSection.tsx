'use client'

import Button from '@components/Button/Button'
import type { InfoCardPriceProps } from '@components/PriceCard/PriceCard'
import InfoCardPrice from '@components/PriceCard/PriceCard'
import type { TCTAAction } from '@hooks/useAction'
import useAction from '@hooks/useAction'
import type { FC } from 'react'

interface IPriceSectionProps {
  title: string
  description: string
  cta: { action: TCTAAction; text: string }
  prices: InfoCardPriceProps[]
}

const PriceSection: FC<IPriceSectionProps> = ({ title, description, cta, prices }) => {
  const handleOnClick = useAction(cta.action)

  return (
    <div className="bg-GRAY px-6 py-12 rounded-lg">
      <h3 className="m ">{title}</h3>
      <p className="s text-BLACK/80 mt-4">{description}</p>
      <Button onClick={handleOnClick} className="mt-12">
        {cta.text}
      </Button>
      <div className="mt-16 flex flex-col gap-5">
        {prices.map((price, idx) => {
          return <InfoCardPrice {...price} key={`${price.infoHeaderTitle}-${idx}`} />
        })}
      </div>
    </div>
  )
}

export default PriceSection
