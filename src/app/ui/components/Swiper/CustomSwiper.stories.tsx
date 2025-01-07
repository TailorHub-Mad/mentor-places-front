import CustomSwiper from '@components/Swiper/CustomSwiper'
import { Meta, StoryObj } from '@storybook/react'
import { CUSTOM_SWIPER_CONTENT_CARD_MOCK, CUSTOM_SWIPER_IMAGE_MOCK } from '@components/Swiper/mock'

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
    ...CUSTOM_SWIPER_CONTENT_CARD_MOCK,
    slidesPerView: 2
  }
}

export const Image: Story = {
  args: {
    ...CUSTOM_SWIPER_IMAGE_MOCK,
    slidesPerView: 1
  }
}
