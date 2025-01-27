import type { IContentBlockProps } from '@components/ContentBlock/ContentBlock'
import ContentBlock from '@components/ContentBlock/ContentBlock'
import type { FC } from 'react'

interface IHeroProps extends IContentBlockProps {
  image: string
}

const Hero: FC<IHeroProps> = ({ image, ...contentBlock }) => {
  return (
    <div style={{ backgroundImage: `url(${image})`, height: '100vh' }}>
      <div className="w-full h-full flex items-end md:items-center bg-BLACK/30">
        <ContentBlock {...contentBlock} className="page w-full mb-6 md:mb-0" />
      </div>
    </div>
  )
}

export default Hero
