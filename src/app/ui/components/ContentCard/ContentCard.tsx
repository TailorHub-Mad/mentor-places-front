import { FC } from 'react'
import { cx } from '@utils/cx'
import { BlogPostCard } from '@components/ContentCard/components/BlogPostCard'

export enum ContentCardVariant {
  BLOG_POST_PHOTO = 'BLOG_POST_PHOTO',
  BLOG_POST_TEXT = 'BLOG_POST_TEXT',
  INFO_CARD_PRICE = 'INFO_CARD_PRICE',
  INFO_CARD_NUMBER = 'INFO_CARD_NUMBER'
}

interface ContentCardProps {
  variant: ContentCardVariant
  data: {
    imageSrc?: string
    title: string
    description?: string
    price?: number
    date?: string
    url?: string
    infoHeaderTitle?: string
  }
}

export const ContentCard: FC<ContentCardProps> = ({ variant, data }) => {
  const { imageSrc, title, description, date, url, infoHeaderTitle = '1' } = data || {}

  switch (variant) {
    case ContentCardVariant.BLOG_POST_PHOTO:
    case ContentCardVariant.BLOG_POST_TEXT:
      return <BlogPostCard imageSrc={imageSrc} title={title} description={description} date={date} variant={variant} url={url} />
    case ContentCardVariant.INFO_CARD_NUMBER:
    case ContentCardVariant.INFO_CARD_PRICE:
      return <InfoCard variant={variant} infoHeaderTitle={infoHeaderTitle} title={title} description={description} />
    default:
      return <span>ContentCard</span>
  }
}

interface InfoCardProps {
  variant: ContentCardVariant
  infoHeaderTitle: string
  title: string
  description?: string
}

const InfoCard: FC<InfoCardProps> = ({ variant, infoHeaderTitle, title, description }) => {
  return (
    <div
      className={cx('p-[32px] ', {
        'bg-GRAY w-[245px]': variant === ContentCardVariant.INFO_CARD_PRICE,
        'bg-YELLOW w-[437px]': variant === ContentCardVariant.INFO_CARD_NUMBER
      })}>
      <div className="info-card__header mb-[140px]">
        <span
          className={cx('font-m text-wrap', {
            'text-xl': variant === ContentCardVariant.INFO_CARD_NUMBER,
            'text-[35px]': variant === ContentCardVariant.INFO_CARD_PRICE
          })}>
          {infoHeaderTitle}
        </span>
      </div>
      <div className="info-card__content">
        <h4 className={'font-m text-s'}>{title}</h4>
        {description && <p className="text-BLACK/60">{description}</p>}
      </div>
    </div>
  )
}
