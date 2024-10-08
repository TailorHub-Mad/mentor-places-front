import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

const Page: FC = () => {
  const t = useTranslations('graficos')

  return (
    <>
      <h1 className="m">{t('title')}</h1>
      <Link href={'/'}>
        <p className="m">{t('back-to-home')}</p>
      </Link>
    </>
  )
}

export default Page
