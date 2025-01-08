import { type AssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import { MOCK_ASSET_IMAGE_SRC } from '@components/AssetCard/mock'

export const ASSET_CARD_INDEX_MOCK: AssetCardIndexProps = {
  universityLogo: '/images/UAX-university-mentor.png',
  universityName: 'Universidad Alfonso X el Sabio (UAX)',
  assetThumbnailUrl: MOCK_ASSET_IMAGE_SRC,
  title: 'Máster Universitario en Marketing Digital',
  format: 'Online',
  price: '$100',
  duration: '9 meses',
  reviewScore: 4.5,
  ctaText: 'Ver más'
}
