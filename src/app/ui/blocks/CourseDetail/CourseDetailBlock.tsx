import type { FC } from 'react'
import { cx } from '@utils/cx'
import { useTranslations } from 'next-intl'
import ContentTag from '@components/ContentTag/ContentTag'
import CourseDetailItem from './components/CourseDetailItem'

export interface ICourseDetailBlockProps {
  title: string
  tags: string[]
  type: string
  isOfficial: boolean
  ects: number
  seats: number
  methodology: string
  internship: string
  internshipAbroad: string
}

const CourseDetailBlock: FC<ICourseDetailBlockProps> = ({
  title,
  ects,
  internshipAbroad,
  isOfficial,
  seats,
  tags,
  type,
  methodology,
  internship
}) => {
  const t = useTranslations()

  const renderCourseDetailItems = () => {
    const items = [
      { title: t('courseDetails.type'), description: type },
      { title: t('courseDetails.official'), description: isOfficial ? t('actions.yes') : t('actions.no') },
      { title: t('courseDetails.ects'), description: `${ects}` },
      { title: t('courseDetails.seats'), description: `${seats}` },
      { title: t('courseDetails.methodology'), description: methodology, className: cx('col-span-2') },
      { title: t('courseDetails.internship'), description: internship, className: cx('col-span-2') },
      { title: t('courseDetails.internshipAbroad'), description: internshipAbroad, className: cx('col-span-2') }
    ]

    return items.map((item, index) => (
      <CourseDetailItem
        key={`course-detail-item-${item.title}-${index}`}
        title={item.title}
        description={item.description}
        className={item?.className}
      />
    ))
  }

  return (
    <div className="course-detail-block grid grid-cols-1 md:grid-cols-6 bg-BLUE/15 rounded-[8px] py-[40px] lg:py-[80px] px-[16px] lg:px-[32px]">
      <div className="course-detail-block__title md:col-span-2 flex flex-col gap-6 mb-10">
        <h2 className="text-xl-mobile font-xl cols">{title}</h2>
        {tags && tags.map((tag, index) => <ContentTag key={index} title={tag} className="scale-90 origin-top-left lg:scale-100" />)}
      </div>
      <div className="course-detail-block__content md:col-span-4 grid grid-cols-2 gap-4">{renderCourseDetailItems()}</div>
    </div>
  )
}

export default CourseDetailBlock
