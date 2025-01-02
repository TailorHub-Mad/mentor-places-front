import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation'
import { LOCALES } from './i18n.settings'

export const localePrefix = 'always' // default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',

  // If locales use different paths, you can
  // specify each external path per locale.
  '/test': {
    es: '/prueba',
    en: '/test'
  }
} satisfies Pathnames<typeof LOCALES>

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({
  locales: LOCALES,
  localePrefix,
  pathnames
})
