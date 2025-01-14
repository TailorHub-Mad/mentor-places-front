import { type FC } from 'react'
import type { IImageMuralCardProps } from './components/ImageMuralCard'
import ImageMuralCard from './components/ImageMuralCard'
import type { ITextMuralCardProps } from './components/TextMuralCard'
import TextMuralCard from './components/TextMuralCard'

export type TMuralCard = IImageMuralCardProps | ITextMuralCardProps

export interface IMuralCard {
  width?: number
  height?: number
}

const MuralCard: FC<TMuralCard & IMuralCard> = (props) => {
  if (props.type === 'image') {
    return <ImageMuralCard {...props} />
  } else if (props.type === 'text') {
    return <TextMuralCard {...props} />
  }
  return null
}

export default MuralCard
