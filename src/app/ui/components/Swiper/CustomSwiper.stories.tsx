import CustomSwiper from '@components/Swiper/CustomSwiper'
import { Meta, StoryObj } from '@storybook/react'
import { CUSTOM_SWIPER_CONTENT_CARD_MOCK, CUSTOM_SWIPER_IMAGE_MOCK } from '@components/Swiper/mock'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'

const meta: Meta<typeof CustomSwiper> = {
  component: CustomSwiper,
  parameters: {
    locale: 'es'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CustomSwiper>

export const ContentCard: Story = {
  args: {
    ...CUSTOM_SWIPER_CONTENT_CARD_MOCK
  }
}

export const ContentCardNavTopRight: Story = {
  args: {
    ...CUSTOM_SWIPER_CONTENT_CARD_MOCK,
    position: SwiperNavigationPosition.TOP_RIGHT
  }
}

export const ContentCardNavTopLeft: Story = {
  args: {
    ...CUSTOM_SWIPER_CONTENT_CARD_MOCK,
    position: SwiperNavigationPosition.TOP_LEFT
  }
}

export const ContentCardNavBottomRight: Story = {
  args: {
    ...CUSTOM_SWIPER_CONTENT_CARD_MOCK,
    position: SwiperNavigationPosition.BOTTOM_RIGHT
  }
}

export const ContentCardNavBottomLeft: Story = {
  args: {
    ...CUSTOM_SWIPER_CONTENT_CARD_MOCK,
    position: SwiperNavigationPosition.BOTTOM_LEFT
  }
}

export const Image: Story = {
  args: {
    ...CUSTOM_SWIPER_IMAGE_MOCK
  }
}
