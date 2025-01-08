import PageTransition from '@layouts/PageTransition'
import { type FC } from 'react'
import { Providers } from '../lib/providers'
import Meta from '@layouts/Meta'
import { Footer } from '@layouts/Footer'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import '../ui/styles/global.styles.css'
import { unstable_setRequestLocale } from 'next-intl/server'
import { LOCALES } from '../../i18n.settings'

interface IRootLayout {
  children: React.ReactNode
  params: { locale: string }
}

const RootLayout: FC<IRootLayout> = ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <html lang={locale}>
      <head />
      <Meta />
      <NextIntlClientProvider messages={messages}>
        <Providers>
          <body>
            <main>{children}</main>
            <Footer />
            <PageTransition />
          </body>
        </Providers>
      </NextIntlClientProvider>
    </html>
  )
}

export default RootLayout

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}
