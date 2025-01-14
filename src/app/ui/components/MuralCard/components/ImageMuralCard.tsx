import { type FC } from 'react'
import type { IMuralCard } from '../MuralCard'

export interface IImageMuralCardProps {
  type: 'image'
  src: string
}

const ImageMuralCard: FC<IImageMuralCardProps & IMuralCard> = ({ src, width, height }) => {
  return <div className={`rounded-lg bg-cover bg-center h-full w-full`} style={{ backgroundImage: `url(${src})`, width, height }} />
}

export default ImageMuralCard
