import ContentTag from '@components/ContentTag/ContentTag'
import { EColor } from '@theme/foundations/colors.foundations'
import { titleToBlockId } from '@utils/titleToBlockId'
import type { FC } from 'react'
import React from 'react'

export interface IBlock {
  id: string
  text: string
}

interface ITagListProps {
  blocks: IBlock[]
}

const TagList: FC<ITagListProps> = ({ blocks }) => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-6 mt-16">
      {blocks.map((block) => {
        return (
          <ContentTag
            title={block.text}
            bgColor={EColor.BLUE_LIGHT}
            textColor={EColor.BLACK}
            href={`#${titleToBlockId(block.id)}`}
            key={block.id}
          />
        )
      })}
    </div>
  )
}

export default TagList
