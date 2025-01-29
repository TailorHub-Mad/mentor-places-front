import type { FC } from 'react'
import AssetCardIndex, { type IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'

interface ICoursesFeedBlockProps {
  courses: IAssetCardIndexProps[]
}

const CoursesFeedBlock: FC<ICoursesFeedBlockProps> = ({ courses }) => {
  return (
    <div className="courses-feed-block flex flex-col gap-[24px]">
      {courses.map((course, index) => {
        return <AssetCardIndex key={`courses-feed-block__asset-card-${index}-${course.title}`} {...course} />
      })}
    </div>
  )
}

export default CoursesFeedBlock
