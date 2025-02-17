import AssetCard, { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import type { IContentBlockProps } from '@components/ContentBlock/ContentBlock'
import ContentBlock from '@components/ContentBlock/ContentBlock'
import type { IAssetCardData } from '@interfaces/assetCard.interface'
import type { FC } from 'react'

interface IHomeCoursesProps extends IContentBlockProps {
  cards: IAssetCardData[]
}

const HomeCourses: FC<IHomeCoursesProps> = ({ cards, ...props }) => {
  return (
    <div className="bg-GRAY flex flex-col md:flex-row px-10 py-20">
      <div>
        <ContentBlock className="md:w-[70%]" {...props} />
      </div>
      <div className="mt-14 md:mt-0 flex flex-col md:flex-row gap-6 md:w-[50%]">
        {cards.map((card, idx) => {
          return <AssetCard key={`${card.title}-${idx}`} variant={EAssetCardVariant.withoutIcons} data={card} />
        })}
      </div>
    </div>
  )
}

export default HomeCourses
