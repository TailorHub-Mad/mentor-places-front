import type { FC } from 'react'
import AssetCardIndex, { type IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import Banner from '../Banner/Banner'

interface ICoursesFeedBlockProps {
  courses: IAssetCardIndexProps[]
}

const CoursesFeedBlock: FC<ICoursesFeedBlockProps> = ({ courses }) => {
  return (
    <div className="courses-feed-block flex flex-col gap-[24px]">
      {courses.map((course, index) => {
        return (
          <>
            <AssetCardIndex key={`courses-feed-block__asset-card-${index}-${course.title}`} {...course} />
            {/* Add the Banner after every 3 items */}
            {(index + 1) % 3 === 0 && index !== courses.length - 1 && (
              <Banner
                key={`banner-component-${index}`}
                action={'contact'}
                text={'Find out which Master’s programmes match your personality!'}
                cta={'Saber más'}
              />
            )}
          </>
        )
      })}
    </div>
  )
}

export default CoursesFeedBlock
