import { useTranslations } from 'next-intl'
import type { FC } from 'react'

const PersonalData: FC = () => {
  const t = useTranslations('personalData')

  return (
    <div className="bg-WHITE rounded-lg">
      <p className="text-xl-mobile font-xl-mobile md:text-xl md:font-xl">Datos personales</p>
      <p className="s">{t('name')}</p>
      <p className="s">{t('surname')}</p>
      <p className="s">{t('email')}</p>
      <p className="s">{t('phone')}</p>
    </div>
  )
}

export default PersonalData
