import type { FC } from 'react'
import PhoneIcon from '@components/icons/PhoneIcon'
import LocationIcon from '@components/icons/LocationIcon'
import Button from '@components/Button/Button'
import { useTranslations } from 'next-intl'

export interface IContactCardProps {
  phone: string
  name: string
  address: string
  href: string
}

const ContactCard: FC<IContactCardProps> = ({ phone, href, address, name }) => {
  const t = useTranslations()

  return (
    <div className="contact-card bg-YELLOW p-[19px] md:p-[26px] flex flex-col justify-between min-h-[288px] md:min-h-[322px] rounded-[8px]">
      <div className="contact-card__phone flex items-center gap-2">
        <PhoneIcon />
        <span>{phone}</span>
      </div>
      <div className="contact-card__address">
        <h3 className="text-m font-xl mb-[10px]">{name}</h3>
        <div className="location flex items-center gap-2">
          <LocationIcon />
          <span className="text-BLACK/60 font-s">{address}</span>
        </div>
      </div>
      <div className="contact-card__cta">
        <Button variant={'primary'} href={href}>
          {t('moreInfo')}
        </Button>
      </div>
    </div>
  )
}

export default ContactCard
