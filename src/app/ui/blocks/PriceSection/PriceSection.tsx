'use client'

import Button from '@components/Button/Button'
import type { InfoCardPriceProps } from '@components/PriceCard/PriceCard'
import InfoCardPrice from '@components/PriceCard/PriceCard'
import useAction from '@hooks/useAction'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

interface IPriceSectionProps {
  title: string
  description?: string | null
  prices: InfoCardPriceProps[]
}

const PriceSection: FC<IPriceSectionProps> = ({ title, description, prices }) => {
  const handleOnClick = useAction('contact')
  const t = useTranslations()

  return (
    <div className="bg-GRAY px-6 py-12 rounded-lg md:flex gap-20">
      <div className="md:flex md:flex-col md:justify-between md:items-start">
        <div>
          <h3 className="m md:text-xl-mobile md:font-xl">{title}</h3>
          <p className="s text-BLACK/80 mt-4 max-w-[80%]">{description}</p>
        </div>
        <Button onClick={handleOnClick} className="mt-12">
          {t('actions.callUs')}
        </Button>
      </div>
      <div className="mt-16 md:mt-0 flex flex-col gap-5 md:flex-row">
        {prices.map((price, idx) => {
          return <InfoCardPrice {...price} key={`${price.infoHeaderTitle}-${idx}`} />
        })}
      </div>
    </div>
  )
}

export default PriceSection
