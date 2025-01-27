import type { IContentBlockProps } from '@components/ContentBlock/ContentBlock'
import ContentBlock from '@components/ContentBlock/ContentBlock'
import { cx } from '@utils/cx'
import type { FC } from 'react'

interface IHeroProps extends IContentBlockProps {
  image: string
}

const Hero: FC<IHeroProps> = ({ image, ...contentBlock }) => {
  const bgColor = contentBlock.theme === 'light' ? 'bg-BLACK/30' : 'bg-WHITE/30'

  return (
    <div style={{ backgroundImage: `url(${image})`, height: '70vh' }} className="page rounded-lg mt-4">
      <div className={cx('w-full h-full flex items-end md:items-center rounded-lg', bgColor)}>
        <ContentBlock {...contentBlock} className="page w-full mb-6 md:mb-0" />
      </div>
    </div>
  )
}

export default Hero
