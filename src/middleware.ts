import { defaultLocale, locales } from './i18n.settings'
import createMiddleware from 'next-intl/middleware'
import { localePrefix, pathnames } from './navigation'

export default createMiddleware({
  defaultLocale, // Used when no locale matches
  locales, // A list of all locales that are supported
  localePrefix,
  pathnames
})

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', `/(${locales.join('|')})/:path*`]
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
