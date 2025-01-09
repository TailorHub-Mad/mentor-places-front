import { type FC } from 'react'

export interface IImageMuralCardProps {
  type: 'image'
  src: string
}

const ImageMuralCard: FC<IImageMuralCardProps> = ({ src }) => {
  return <div className={`rounded-lg bg-cover bg-center h-80 w-56`} style={{ backgroundImage: `url(${src})` }} />
}

export default ImageMuralCard
