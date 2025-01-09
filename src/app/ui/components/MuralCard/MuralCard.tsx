import { type FC } from 'react'
import ImageMuralCard, { IImageMuralCardProps } from './components/ImageMuralCard'
import TextMuralCard, { ITextMuralCardProps } from './components/TextMuralCard'

type TMuralCard = IImageMuralCardProps | ITextMuralCardProps

const MuralCard: FC<TMuralCard> = (props) => {
  if (props.type === 'image') {
    return <ImageMuralCard {...props} />
  } else if (props.type === 'text') {
    return <TextMuralCard {...props} />
  }
  return null
}

export default MuralCard
