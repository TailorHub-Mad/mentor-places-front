import AssetCard, { type IAssetCardProps } from '@components/AssetCard/AssetCard'
import CourseFeaturedDetails from '@components/CourseFeaturedDetails/CourseFeaturedDetails'
import useBreakpoint from '@hooks/useBreakpoint'
import { type TAssetDetailOptions } from '@interfaces/assetDetail.type'
import type { FC } from 'react'

interface IHeroCourseProps {
  image: string
  card: IAssetCardProps
  featuredDetails: TAssetDetailOptions
}

const HeroCourse: FC<IHeroCourseProps> = ({ image, card, featuredDetails }) => {
  const { isMobile } = useBreakpoint()

  return (
    <div
      className="pt-40 md:pt-20"
      style={{
        backgroundImage: `url(${image})`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: isMobile ? '100% 70%' : undefined
      }}>
      <div className="page pb-8">
        <AssetCard {...card} />
        <CourseFeaturedDetails className="mt-3 md:mt-28" {...featuredDetails} />
      </div>
    </div>
  )
}

export default HeroCourse
