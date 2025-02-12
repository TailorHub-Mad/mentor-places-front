'use client'

import AssetCard, { type IAssetCardProps } from '@components/AssetCard/AssetCard'
import CourseFeaturedDetails from '@components/CourseFeaturedDetails/CourseFeaturedDetails'
import useBreakpoint from '@hooks/useBreakpoint'
import { type TAssetDetailOptions } from '@interfaces/assetDetail.type'
import type { FC } from 'react'
import type { IBlock } from '../HeroInstitution/components/TagList'
import TagList from '../HeroInstitution/components/TagList'

export interface IHeroCourseProps {
  image: string
  card: IAssetCardProps
  featuredDetails: TAssetDetailOptions
  blocks: IBlock[]
}

const HeroCourse: FC<IHeroCourseProps> = ({ image, card, featuredDetails, blocks }) => {
  const { isMobile } = useBreakpoint()

  return (
    <section>
      <div
        className="pt-40 md:pt-20"
        style={{
          maxWidth: '1440px',
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
      {!isMobile && <TagList blocks={blocks} />}
    </section>
  )
}

export default HeroCourse
