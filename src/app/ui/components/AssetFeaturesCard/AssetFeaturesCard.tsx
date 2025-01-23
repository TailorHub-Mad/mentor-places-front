import type { FC } from 'react'

interface IAssetFeaturesCardProps {
  title: string
  description: string
  array: { label: string; number: number }[]
}

const AssetFeaturesCard: FC<IAssetFeaturesCardProps> = ({ title, description, array }) => {
  return (
    <div className="bg-BLUE_LIGHT rounded-lg px-6 py-8">
      <p className="m">{title}</p>
      <p className="s opacity-60 mt-16 max-w-[495px]">{description}</p>
      <hr className="h-[1px] border-BLACK/10 mt-6 mb-8" />
      <div className="flex gap-2 flex-wrap">
        {array.map((elm) => {
          const { label, number } = elm
          return (
            <div key={label} className="bg-BLUE px-6 py-2 rounded-lg">
              <p className="s text-WHITE">{`${label} (${number})`}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AssetFeaturesCard
