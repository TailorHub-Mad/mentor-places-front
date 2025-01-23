import type { FC } from 'react'

interface IAssetFeaturesCardProps {
  title: string
  description: string
  array: { label: string; number: number }[]
}

const AssetFeaturesCard: FC<IAssetFeaturesCardProps> = ({ title, description, array }) => {
  return (
    <div className="bg-BLUE_LIGHT rounded-lg py-8">
      <div className="px-6">
        <p className="m">{title}</p>
        <p className="s opacity-60 mt-16 max-w-[495px]">{description}</p>
        <hr className="h-[1px] border-BLACK/10 mt-6 mb-8" />
      </div>
      <div className="flex gap-2 overflow-x-auto md:flex-wrap pl-6 md:px-6 hide-scrollbar">
        {array.map((elm, idx) => {
          const { label, number } = elm
          const isLast = array.length - 1 === idx
          return (
            <div key={label} className="bg-BLUE px-6 py-2 rounded-lg" style={{ marginRight: isLast ? 24 : 0 }}>
              <p className="s text-WHITE text-nowrap">{`${label} (${number})`}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AssetFeaturesCard
