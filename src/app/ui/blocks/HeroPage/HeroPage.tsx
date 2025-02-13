import type { IContentBlockProps } from '@components/ContentBlock/ContentBlock'
import ContentBlock from '@components/ContentBlock/ContentBlock'
import { cx } from '@utils/cx'
import type { FC } from 'react'

interface IHeroPageProps extends IContentBlockProps {
  image: string
}

const HeroPage: FC<IHeroPageProps> = ({ image, ...contentBlock }) => {
  const bgColor = contentBlock.theme === 'light' ? 'bg-BLACK/30' : 'bg-WHITE/30'

  return (
    <div
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '70vh' }}
      className="rounded-lg mt-4 flex flex-shrink">
      <div className={cx('w-full flex items-end md:items-center rounded-lg', bgColor)}>
        <ContentBlock {...contentBlock} className="page w-full mb-6 md:mb-0 lg:w-[30%]" />
      </div>
    </div>
  )
}

export default HeroPage
