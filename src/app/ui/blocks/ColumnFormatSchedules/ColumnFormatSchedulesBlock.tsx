import type { FC } from 'react'
import AssetFeaturesCard, { type IAssetFeaturesCardProps } from '@components/AssetFeaturesCard/AssetFeaturesCard'

export interface IFormatSchedulesBlockProps {
  title: string
  cards: IAssetFeaturesCardProps[]
}

const ColumnFormatSchedulesBlock: FC<IFormatSchedulesBlockProps> = ({ title, cards }) => {
  return (
    <div className="column-format-shedules-block grid grid-cols-1 md:grid-cols-8">
      <div className="column-format-schedules-block__title md:col-span-3">
        <h2 className="text-xl-mobile font-xl">{title}</h2>
      </div>
      <div className="column-format-schedules-block__content">
        {cards.map((card, index) => {
          return <AssetFeaturesCard key={`column-format-schedule-block_asset-feature-card-${card.title}-${index}`} {...card} />
        })}
      </div>
    </div>
  )
}

export default ColumnFormatSchedulesBlock
