import type { IAssetCardProps } from '@components/AssetCard/AssetCard'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import type { IAssetCardDetail } from '@interfaces/assetCard.interface'

export const ASSET_CARD_DETAILS_MOCK: IAssetCardDetail[] = [
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

export const MOCK_ASSET_CARD: IAssetCardProps = {
  variant: EAssetCardVariant.withIcons,
  data: {
    title: 'Máster universitario en Marketing Digital',
    universityName: 'Universidad Alfonso X el Sabio (UAX)',
    universityLogo: '/images/UAX-university-mentor.png',
    details: ASSET_CARD_DETAILS_MOCK,
    ctaText: 'Más información'
  }
}

export const MOCK_ASSET_HERO_CARD: IAssetCardProps = {
  variant: EAssetCardVariant.withIcons,
  data: {
    title: 'Máster universitario en Marketing Digital',
    universityName: 'Universidad Alfonso X el Sabio (UAX)',
    universityLogo: '/images/UAX-university-mentor.png',
    description: 'Marketing Digital / Máster Universitario en Marketing Digital'
  }
}

export const MOCK_ASSET_IMAGE_SRC = '/images/university-example-mentor.jpeg'
