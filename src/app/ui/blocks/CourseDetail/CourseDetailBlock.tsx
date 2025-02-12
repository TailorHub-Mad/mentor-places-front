import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import ContentTag from '@components/ContentTag/ContentTag'
import CourseDetailItem from './components/CourseDetailItem'

export interface ICourseDetailBlockProps {
  title: string
  tags?: string[]
  type?: string
  isOfficial?: boolean
  ects?: number
  seats?: number
  methodology?: string
  customItems?: { header: string; body: string }[]
}

const CourseDetailBlock: FC<ICourseDetailBlockProps> = ({ title, ects, isOfficial, seats, tags, type, methodology, customItems }) => {
  const t = useTranslations()

  const renderCourseDetailItems = () => {
    const items = [
      { title: t('courseDetails.type'), description: type },
      { title: t('courseDetails.official'), description: isOfficial ? t('actions.yes') : t('actions.no') },
      { title: t('courseDetails.ects'), description: ects ? `${ects}` : undefined },
      { title: t('courseDetails.seats'), description: seats ? `${seats}` : undefined },
      { title: t('courseDetails.methodology'), description: methodology, className: 'col-span-2' }
    ]

    if (customItems) {
      customItems.forEach((elm) => {
        items.push({ title: elm.header, description: elm.body, className: 'col-span-2' })
      })
    }

    return items.map((item, index) => {
      if (!item.description) return

      return (
        <CourseDetailItem
          key={`course-detail-item-${item.title}-${index}`}
          title={item.title}
          description={item.description}
          className={item?.className}
        />
      )
    })
  }

  return (
    <div className="course-detail-block grid grid-cols-1 md:grid-cols-6 bg-BLUE/15 rounded-[8px] py-[40px] lg:py-[80px] px-[16px] lg:px-[32px]">
      <div className="course-detail-block__title md:col-span-2 flex flex-col gap-6 mb-10 md:pr-10">
        <h2 className="text-xl-mobile font-xl">{title}</h2>
        {tags && tags.map((tag, index) => <ContentTag key={index} title={tag} className="scale-90 origin-top-left lg:scale-100" />)}
      </div>
      <div className="course-detail-block__content md:col-span-4 grid grid-cols-2 gap-4">{renderCourseDetailItems()}</div>
    </div>
  )
}

export default CourseDetailBlock
