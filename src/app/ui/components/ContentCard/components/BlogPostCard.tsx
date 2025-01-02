import { FC } from 'react'
import { cx } from '@utils/cx'
import Image from 'next/image'
import { LogoFavicon } from '@components/icons/LogoFavicon'
import Link from 'next/link'
import { ContentCardVariant } from '@components/ContentCard/ContentCard'

interface BlogPostCardProps {
  imageSrc?: string
  title: string
  description?: string
  date?: string
  variant?: ContentCardVariant
  url?: string
}

export const BlogPostCard: FC<BlogPostCardProps> = ({ imageSrc, title, description, date, variant, url }) => {
  return (
    <div
      className={cx('blog-post-card w-[437px] p-[32px] rounded-xl  transition-colors', {
        'bg-GRAY hover:bg-YELLOW': variant === ContentCardVariant.BLOG_POST_PHOTO,
        'bg-YELLOW ': variant === ContentCardVariant.BLOG_POST_TEXT
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
