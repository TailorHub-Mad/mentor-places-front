import type { CustomSwiperProps } from '@components/Swiper/CustomSwiper'
import ContentCard, { ContentCardVariant } from '@components/ContentCard/ContentCard'
import Image from 'next/image'

const imageSrcMock = '/images/blog-post-example-mentor.jpeg'

const ContentCardMock = (
  <ContentCard
    variant={ContentCardVariant.BLOG_POST_PHOTO}
    data={{
      imageSrc: imageSrcMock,
      title: 'Blog post title with photo',
      description: 'Ofrecer comparativas entre universidades, teniendo en cuenta una serie de variables para'
    }}
  />
)

const ImageMock = <Image src={imageSrcMock} alt={''} width={1000} height={500} />

export const CUSTOM_SWIPER_CONTENT_CARD_MOCK: CustomSwiperProps = {
  items: [ContentCardMock, ContentCardMock, ContentCardMock, ContentCardMock, ContentCardMock, ContentCardMock],
  swiperOptions: {
    navigation: false,
    slidesPerView: 2
  }
}

export const CUSTOM_SWIPER_IMAGE_MOCK: CustomSwiperProps = {
  items: [ImageMock, ImageMock, ImageMock, ImageMock, ImageMock, ImageMock],
  swiperOptions: {
    navigation: false
  }
}
