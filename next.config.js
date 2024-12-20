import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cachePrimitives: false,
    staleTimes: {
      dynamic: 0,
      static: 0
    }
  }
}

export default withNextIntl(nextConfig)
