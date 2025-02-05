import type { Meta, StoryObj } from '@storybook/react'
import HomePageBuilder from './HomePageBuilder'
import { MOCK_MURAL } from '@components/Mural/mock'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { MOCK_ASSET_CARD } from '@components/AssetCard/mock'

const meta: Meta<typeof HomePageBuilder> = {
  component: HomePageBuilder,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof HomePageBuilder>

export const Default: Story = {
  args: {
    data: {
      hero: {
        title: 'Asesoría educativa adaptada a tu vida',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu posuere fringilla, donec in netus platea felis bibendum litora diam vulputate, ornare montes',
        cta: 'Asesoramiento gratuito',
        action: 'advice',
        image: '/images/blog-post-example-mentor.jpeg'
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
}
