import type { FC } from 'react'
import { Fragment } from 'react'
import AssetCardIndex, { type IAssetCardIndexProps } from '@components/AssetCardIndex/AssetCardIndex'
import Banner, { type IBannerProps } from '../../Banner/Banner'

export interface ICoursesFeedProps {
  courses: IAssetCardIndexProps[]
  banner: IBannerProps
}

const CoursesFeed: FC<ICoursesFeedProps> = ({ courses, banner }) => {
  const renderBanner = (index: number) => <Banner key={`banner-course-feed-${banner.text}-${index}`} {...banner} />

  return (
    <div className="courses-feed-block flex flex-col gap-[24px]">
      {courses.map((course, index) => {
        return (
          <Fragment key={`courses-feed-block__asset-card-${index}-${course.title}`}>
            <AssetCardIndex {...course} />
            {/* Add the Banner after second course and only once per page */}
            {index === 1 && renderBanner(index)}
          </Fragment>
        )
      })}
    </div>
  )
}

export default CoursesFeed
