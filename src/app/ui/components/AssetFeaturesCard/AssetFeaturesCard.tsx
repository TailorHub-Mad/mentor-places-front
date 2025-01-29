import type { FC } from 'react'
import type { TAssetDetailType } from '@interfaces/assetDetail.type'
import { AssetIconsArray } from '@utils/AssetIconsArray'

export interface IAssetFeaturesCardProps {
  title?: string
  icon?: TAssetDetailType
  description: string
  tags: { label: string; number?: number }[]
}

const AssetFeaturesCard: FC<IAssetFeaturesCardProps> = ({ title, description, tags, icon }) => {
  const Icon = AssetIconsArray[icon as TAssetDetailType] || null
  const isHtml = /<[^>]+>/g.test(description)

  return (
    <div className="bg-BLUE_LIGHT rounded-lg py-8">
      <div className="px-6">
        {Icon && <Icon width={40} height={46} />}
        <p className="m">{title}</p>
        {isHtml ? (
          <div
            className="s mt-16 max-w-[495px]"
            dangerouslySetInnerHTML={{
              __html: description
            }}></div>
        ) : (
          <p className="s opacity-60 mt-16 max-w-[495px]">{description}</p>
        )}
        <hr className="h-[1px] border-BLACK/10 mt-6 mb-8" />
      </div>
      <div className="flex gap-2 overflow-x-auto md:flex-wrap pl-6 md:px-6 hide-scrollbar">
        {tags.map((elm, idx) => {
          const { label, number } = elm
          const isLast = tags.length - 1 === idx
          return (
            <div key={label} className="bg-BLUE px-6 py-2 rounded-lg" style={{ marginRight: isLast ? 24 : 0 }}>
              <p className="s text-WHITE text-nowrap">
                {`${label}`}
                {number && <span>{`(${number})`}</span>}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AssetFeaturesCard
