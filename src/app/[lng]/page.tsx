'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { type FC, useContext } from 'react'
import ThemeContext from '../lib/providers/ThemeProvider'

const Page: FC = () => {
  const t = useTranslations()
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <button id="theme-toggle" className="l bg-PURPLE dark:bg-WHITE dark:bg-opacity-50 rounded p-4 mb-8" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <div>
        <Link href={'/graficos'}>
          <p className="m">{t('menu.graphics')}</p>
        </Link>
      </div>
      <div>
        <Link href={'/calendario-economico'}>
          <p className="m">{t('menu.calendar')}</p>
        </Link>
      </div>
      <div>
        <Link href={'/activos'}>
          <p className="m">{t('menu.assets')}</p>
        </Link>
      </div>
    </>
  )
}

export default Page
