'use client'
import { FC } from 'react'
import { locales } from '../../../i18n.settings'
import { Link, usePathname } from '../../../navigation'

export const Footer: FC = () => {
  const pathname = usePathname()

  return (
    <footer style={{ marginTop: 50 }}>
      {locales.map((locale) => {
        return (
          <Link key={locale} href={pathname} locale={locale}>
            <p className="s">{locale}</p>
          </Link>
        )
      })}
    </footer>
  )
}
