import { FC } from 'react'
import { LogoFavicon } from '@components/icons/LogoFavicon'
import { cx } from '@utils/cx'
import Link from 'next/link'
import Image from 'next/image'

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
    number?: number
    date?: string
    url?: string
  }
}

export const ContentCard: FC<ContentCardProps> = ({ variant, data }) => {
  const { imageSrc, title, description, date, url } = data || {}

  switch (variant) {
    case ContentCardVariant.BLOG_POST_PHOTO:
    case ContentCardVariant.BLOG_POST_TEXT:
      return <BlogPostCard imageSrc={imageSrc} title={title} description={description} date={date} variant={variant} url={url} />
    default:
      return <span>ContentCard</span>
  }
}

interface BlogPostCardProps {
  imageSrc?: string
  title: string
  description?: string
  date?: string
  variant?: ContentCardVariant
  url?: string
}

const BlogPostCard: FC<BlogPostCardProps> = ({ imageSrc, title, description, date, variant, url }) => {
  return (
    <div
      className={cx('blog-post-card w-[437px] p-[32px] rounded-xl  transition-colors', {
        'bg-GRAY hover:bg-YELLOW': ContentCardVariant.BLOG_POST_PHOTO,
        'bg-YELLOW ': ContentCardVariant.BLOG_POST_TEXT
      })}>
      {variant === ContentCardVariant.BLOG_POST_PHOTO && (
        <div className="blog-post-card__header mb-[41px] relative">
          <>
            {imageSrc && (
              <div className="image-wrapper relative overflow-hidden h-[185px] rounded-xl mb-[21px]">
                <Image width={500} height={500} src={imageSrc} alt={title} className="absolute" />
              </div>
            )}
            <span className="bg-BLUE px-2 py-1 text-WHITE rounded-xl text-s font-s font-thin">Learn</span>
          </>
        </div>
      )}
      <div className="blog-post-card__content relative">
        {variant === ContentCardVariant.BLOG_POST_TEXT && <LogoFavicon className="absolute -right-3 -top-3  w-8 h-8 " strokeBg="black" />}
        <Link href={url || ''}>
          <h4 className="font-m text-m mb-[24px]">{title}</h4>
        </Link>
        <p className="font-s text-s">{description}</p>
      </div>
      {date && (
        <div className="blog-post-card__footer mt-4">
          <span className="font-s text-s">{date}</span>
        </div>
      )}
    </div>
  )
}
