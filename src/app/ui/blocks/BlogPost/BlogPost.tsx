'use client'

import RichText from '@components/RichText/RichText'
import SocialMedia from '@components/SocialMedia/SocialMedia'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import type { FC } from 'react'
import { Link } from '../../../../navigation'
import useBreakpoint from '@hooks/useBreakpoint'

interface IBlogPostProps {
  title: string
  description: string
  image: string
  post: string
}

const BlogPost: FC<IBlogPostProps> = ({ title, description, image, post }) => {
  const t = useTranslations()
  const { isDesktop } = useBreakpoint()

  const backToArticlesLink = (
    // TODO - href
    <Link href={'/'}>
      <p className="s text-BLACK/60 underline cursor-pointer">{t('backToArticles')}</p>
    </Link>
  )

  return (
    <div className="mb-20 flex  flex-col items-center">
      <div className="bg-YELLOW p-10 w-full flex justify-center">
        <div className="flex flex-col lg:flex-row max-w-[1440px] lg:gap-[100px]">
          {!isDesktop && backToArticlesLink}
          <Image src={image} alt={title} height={484} width={668} style={{ borderRadius: '8px', marginTop: isDesktop ? 0 : 24 }} />
          <div>
            {isDesktop && backToArticlesLink}
            <h1 className="text-xl font-xl leading-xl mt-20 lg:mt-[120px]">{title}</h1>
            <p className="s text-BLACK/60 mt-6">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-[90%] lg:w-[40%]">
          <RichText content={post} disableTruncate />
          <SocialMedia title={title} />
        </div>
      </div>
    </div>
  )
}

export default BlogPost
