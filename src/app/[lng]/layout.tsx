import PageTransition from '@layouts/PageTransition'
import { type FC } from 'react'
import { Providers } from '../lib/providers'
import Meta from '@layouts/Meta'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import '../ui/styles/global.styles.css'
import { unstable_setRequestLocale } from 'next-intl/server'
import { LOCALES } from '../../i18n.settings'
import { Footer } from '@layouts/Footer/Footer'
import NavMain from '@components/Navs/NavMain/NavMain'

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
          <body id={'modal-root'}>
            <NavMain
              navLinks={[
                { name: 'Masters', href: '/courses' },
                { name: 'Nosotros', href: '/' }
              ]}
            />
            <main>{children}</main>
            {/*TODO: Add Footer with its props*/}
            <Footer
              menus={[
                [
                  { label: 'Home', href: '/' },
                  { label: 'Masters', href: '/courses' }
                ],
                [{ label: 'Privacidad', href: '/courses' }]
              ]}
              contact={{ phone: '+346666666', email: 'info@mentorplaces.com' }}
            />
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
