import type { ContentCardProps } from '@components/ContentCard/ContentCard'
import { ContentCardVariant } from '@components/ContentCard/ContentCard'

export const CONTENT_CARD_BASE_MOCKS: ContentCardProps = {
  variant: ContentCardVariant.BLOG_POST_PHOTO,
  data: {
    imageSrc: '/images/blog-post-example-mentor.jpeg',
    title: 'Blog post title with photo',
    description: 'Ofrecer comparativas entre universidades, teniendo en cuenta una serie de variables para'
  }
}

export const CONTENT_CARD_PHOTO_MOCK: string = '/images/blog-post-example-mentor.jpeg'
