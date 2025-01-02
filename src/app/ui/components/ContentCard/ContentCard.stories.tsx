import { Meta, StoryObj } from '@storybook/react'
import { ContentCard, ContentCardVariant } from '@components/ContentCard/ContentCard'

const meta: Meta<typeof ContentCard> = {
  component: ContentCard,
  args: undefined,
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
    data: undefined,
    variant: ContentCardVariant.INFO_CARD_NUMBER
  }
}
export const InfoCardPrice: Story = {
  args: {
    data: undefined,
    variant: ContentCardVariant.INFO_CARD_PRICE
  }
}
