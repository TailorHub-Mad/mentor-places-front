import ContentTag from '@components/ContentTag/ContentTag'
import { EColor } from '@theme/foundations/colors.foundations'
import React, { FC } from 'react'

export interface IBlock {
  id: string
  text: string
}

interface ITagListProps {
  blocks: IBlock[]
}

const TagList: FC<ITagListProps> = ({ blocks }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-16">
      {blocks.map((block) => {
        return <ContentTag title={block.text} bgColor={EColor.BLUE_LIGHT} textColor={EColor.BLACK} href={`#${block.id}`} key={block.id} />
      })}
    </div>
  )
}

export default TagList
