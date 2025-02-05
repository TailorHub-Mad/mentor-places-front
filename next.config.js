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
  },
  // TODO - Temporary accept all images domains. Images will come from AWS S3
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
