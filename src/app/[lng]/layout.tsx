import PageTransition from '@layouts/PageTransition'
import { FC } from 'react'
import { Providers } from '../lib/providers'
import Meta from '@layouts/Meta'
import { Footer } from '@layouts/Footer'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import '../ui/styles/global.styles.css'

interface IRootLayout {
  children: React.ReactNode
  params: { locale: string }
}

const RootLayout: FC<IRootLayout> = ({ children, params: { locale } }) => {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <head />
      <Meta />
      <Providers>
        <NextIntlClientProvider messages={messages}>
          <body className="bg-SAAS_DARK dark:bg-BLACK">
            <main>{children}</main>
            <Footer />
            <PageTransition />
          </body>
        </NextIntlClientProvider>
      </Providers>
    </html>
  )
}

export default RootLayout
