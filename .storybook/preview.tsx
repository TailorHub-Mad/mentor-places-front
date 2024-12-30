import type { Preview } from '@storybook/react'
import 'src/app/ui/styles/global.styles.css'
import nextIntl from './next-intl'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import enMessages from '../src/locales/en/common.json'
import esMessages from '../src/locales/es/common.json'

const MESSAGES: {
  [key: string]: AbstractIntlMessages
} = {
  en: enMessages,
  es: esMessages
}

const preview: Preview = {
  parameters: {
    nextIntl,
    nextjs: {
      appDirectory: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale || 'en' // Fallback to 'en' if no locale is set// Use mock messages based on selected locale
      const messages = MESSAGES[locale]

      return (
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Story />
        </NextIntlClientProvider>
      )
    }
  ],
  initialGlobals: {
    locale: 'es',
    locales: {
      en: 'English',
      es: 'Español'
    }
  }
}

export default preview
