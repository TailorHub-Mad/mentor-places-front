import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { MOCK_ASSET_CARD } from '@components/AssetCard/mock'
import { MOCK_MURAL } from '@components/Mural/mock'
import type { IHomePageBuilderProps } from './HomePageBuilder'

export const HOME_PAGE_BUILDER_MOCK: IHomePageBuilderProps = {
  data: {
    hero: {
      title: 'Asesoría educativa adaptada a tu vida',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu posuere fringilla, donec in netus platea felis bibendum litora diam vulputate, ornare montes',
      cta: 'Asesoramiento gratuito',
      action: 'advice',
      image: '/images/hero-home.jpeg'
    },
    mural: {
      title: '¿Por qué elegir Mentor Places?',
      data: MOCK_MURAL
    },
    banner: {
      text: 'Find out which Master’s programmes match your personality!',
      cta: 'Haz tu test GRATIS!',
      action: 'contact'
    },
    monthHighlights: {
      title: 'Destacados de este mes',
      items: [
        {
          image: '/images/blog-post-example-mentor.jpeg',
          variant: EAssetCardVariant.withIcons,
          data: {
            ...MOCK_ASSET_CARD.data,
            ranking: 5
          }
        },
        {
          image: '/images/university-example-mentor.jpeg',
          variant: EAssetCardVariant.withIcons,
          data: {
            ...MOCK_ASSET_CARD.data,
            ranking: 5
          }
        },
        {
          image: '/images/blog-post-example-mentor.jpeg',
          variant: EAssetCardVariant.withIcons,
          data: {
            ...MOCK_ASSET_CARD.data,
            ranking: 5
          }
        }
      ]
    }
  }
}
