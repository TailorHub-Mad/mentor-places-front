import type { Meta, StoryObj } from '@storybook/react'
import ContentCard, { ContentCardVariant } from '@components/ContentCard/ContentCard'
import { CONTENT_CARD_BASE_MOCKS } from '@components/ContentCard/mocks'

const meta: Meta<typeof ContentCard> = {
  title: 'Components/Cards/ContentCard',
  component: ContentCard,
  args: CONTENT_CARD_BASE_MOCKS,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ContentCard>

export const BlogPostPhoto: Story = {
  args: {
    data: {
      imageSrc: '/images/blog-post-example-mentor.jpeg',
      title: 'Blog post title with photo',
      description: 'Ofrecer comparativas entre universidades, teniendo en cuenta una serie de variables para'
    },
    variant: ContentCardVariant.BLOG_POST_PHOTO
  }
}

export const BlogPostText: Story = {
  args: {
    data: {
      title: 'Blog post title with photo',
      description: 'Ofrecer comparativas entre universidades, teniendo en cuenta una serie de variables para',
      date: '23/10/2024'
    },
    variant: ContentCardVariant.BLOG_POST_TEXT
  }
}

export const InfoCardNumber: Story = {
  args: {
    data: {
      title: 'Conocimientos',
      infoHeaderTitle: '2.',
      description: 'actualizados con certificaciones en soft skills y metodologías ágiles'
    },
    variant: ContentCardVariant.INFO_CARD_NUMBER
  }
}
