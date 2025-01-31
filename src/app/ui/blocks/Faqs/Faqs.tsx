import type { IFaqItem } from '@components/FaqAccordion/FaqAccordion'
import FaqAccordion from '@components/FaqAccordion/FaqAccordion'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

interface IFaqsProps {
  items: IFaqItem[]
}

const Faqs: FC<IFaqsProps> = ({ items }) => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-8 lg:gap-6 lg:flex-row justify-between">
      <p className="m md:l lg:min-w-[386px]">{t('faqs')}</p>
      <FaqAccordion items={items} />
    </div>
  )
}

export default Faqs
