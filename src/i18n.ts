import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { defaultNS, LOCALES } from './i18n.settings'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!LOCALES.includes(locale as any)) notFound()

  return {
    messages: (await import(`./locales/${locale}/${defaultNS}.json`)).default
  }
})
