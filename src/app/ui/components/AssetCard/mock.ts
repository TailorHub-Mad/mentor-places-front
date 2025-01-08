import type { AssetCardProps } from '@components/AssetCard/AssetCard'
import { AssetCardVariant } from '@components/AssetCard/AssetCard'

export const MOCK_ASSET_CARD: AssetCardProps = {
  variant: AssetCardVariant.withIcons,
  data: {
    title: 'Máster universitario en Marketing Digital',
    universityName: 'Universidad Alfonso X el Sabio (UAX)',
    universityLogo: '/images/UAX-university-mentor.png',
    format: 'Online',
    language: 'Español',
    duration: '9 meses',
    ranking: 5,
    reviewScore: 4.4,
    price: '1000 €',
    ctaText: 'Más información'
  }
}

export const MOCK_ASSET_IMAGE_SRC = '/images/university-example-mentor.jpeg'
