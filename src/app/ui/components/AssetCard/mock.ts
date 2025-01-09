import type { AssetCardProps } from '@components/AssetCard/AssetCard'
import { AssetCardVariant } from '@components/AssetCard/AssetCard'
import type { AssetCardDetail } from '@interfaces/assetCard.interface'

export const MOCK_ASSET_CARD: AssetCardProps = {
  variant: AssetCardVariant.withIcons,
  data: {
    title: 'Máster universitario en Marketing Digital',
    universityName: 'Universidad Alfonso X el Sabio (UAX)',
    universityLogo: '/images/UAX-university-mentor.png',
    ranking: 5,
    details: [
      {
        type: 'format',
        value: 'online'
      },
      {
        type: 'language',
        value: 'Español'
      },
      {
        type: 'duration',
        value: '9 meses'
      },
      {
        type: 'rating',
        value: 4.4
      },
      {
        type: 'price',
        value: 1000
      }
    ],
    ctaText: 'Más información'
  }
}

export const MOCK_ASSET_IMAGE_SRC = '/images/university-example-mentor.jpeg'

export const ASSET_CARD_DETAILS_MOCK: AssetCardDetail[] = [
  {
    type: 'format',
    value: 'online'
  },
  {
    type: 'language',
    value: 'Español'
  },
  {
    type: 'duration',
    value: '9 meses'
  },
  {
    type: 'rating',
    value: 4.4
  },
  {
    type: 'price',
    value: 1000
  }
]
