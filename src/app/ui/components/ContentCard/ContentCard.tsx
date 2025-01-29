import { type FC } from 'react'
import { BlogPostCard } from '@components/ContentCard/components/BlogPostCard'
import { InfoCard } from '@components/ContentCard/components/InfoCard'

export enum ContentCardVariant {
  BLOG_POST_PHOTO = 'BLOG_POST_PHOTO',
  BLOG_POST_TEXT = 'BLOG_POST_TEXT',
  INFO_CARD_PRICE = 'INFO_CARD_PRICE',
  INFO_CARD_NUMBER = 'INFO_CARD_NUMBER'
}

export interface IContentCardData {
  imageSrc?: string
  title: string
  description?: string
  price?: number
  date?: string
  url?: string
  infoHeaderTitle?: string
}
export interface ContentCardProps {
  variant: ContentCardVariant
  data: IContentCardData
}

const ContentCard: FC<ContentCardProps> = ({ variant, data }) => {
  const { imageSrc, title, description, date, url, infoHeaderTitle = '1' } = data || {}

  switch (variant) {
    case ContentCardVariant.BLOG_POST_PHOTO:
    case ContentCardVariant.BLOG_POST_TEXT:
      return <BlogPostCard imageSrc={imageSrc} title={title} description={description} date={date} variant={variant} url={url} />
    case ContentCardVariant.INFO_CARD_NUMBER:
    case ContentCardVariant.INFO_CARD_PRICE:
      return <InfoCard variant={variant} infoHeaderTitle={infoHeaderTitle} title={title} description={description} />
    default:
      return <span>Variant no implemented</span>
  }
}

export default ContentCard
