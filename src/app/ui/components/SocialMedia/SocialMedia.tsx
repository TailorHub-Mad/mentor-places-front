'use client'

import type { FC } from 'react'
import { usePathname } from '../../../../navigation'
import Button from '@components/Button/Button'
import LinkedInIcon from '@components/icons/LinkedInIcon'
import WhatsAppIcon from '@components/icons/WhatsAppIcon'
import XIcon from '@components/icons/XIcon'
import { useTranslations } from 'next-intl'

interface ISocialMediaProps {
  title: string
}

const SOCIAL_MEDIA_PLATFORMS = [
  {
    name: 'x',
    url: (encodedUrl: string, encodedTitle: string) => `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    icon: <XIcon />
  },
  {
    name: 'linkedin',
    url: (encodedUrl: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    icon: <LinkedInIcon />
  },
  {
    name: 'whatsapp',
    url: (encodedUrl: string, encodedTitle: string) => `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    icon: <WhatsAppIcon />
  }
]

const SocialMedia: FC<ISocialMediaProps> = ({ title }) => {
  const t = useTranslations()
  const pathname = usePathname()

  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin
    }
    return 'https://localhost:3000'
  }

  const postUrl = `${getBaseUrl()}${pathname}`
  const encodedUrl = encodeURIComponent(postUrl)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div>
      <h4 className="m">{t('sharePost')}</h4>
      <div className="flex gap-2 mt-4">
        {SOCIAL_MEDIA_PLATFORMS.map(({ name, url, icon }) => (
          <a key={name} href={url(encodedUrl, encodedTitle)} target="_blank" rel="noopener noreferrer">
            <Button variant="icon">{icon}</Button>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia
