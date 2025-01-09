import { type FC } from 'react'

export interface IImageMuralCardProps {
  type: 'image'
  src: string
}

const ImageMuralCard: FC<IImageMuralCardProps> = ({ src }) => {
  return <div className={`rounded-lg bg-cover bg-center h-[535px] w-[322px]`} style={{ backgroundImage: `url(${src})` }} />
}

export default ImageMuralCard
