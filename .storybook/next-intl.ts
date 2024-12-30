import en from '../src/locales/en/common.json'
import es from '../src/locales/es/common.json'

const messagesByLocale: Record<string, any> = { es, en }

const nextIntl = {
  defaultLocale: 'es',
  messagesByLocale
}

export default nextIntl
