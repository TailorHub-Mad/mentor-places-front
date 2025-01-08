import { type FC } from 'react'
import CourseDetail, { TCourseDetailType } from './components/CourseDetail'

interface ICourseFeaturedDetailsProps {
  duration: string
  format: string
  language: string
  campus: string
  startDate: string
}

const CourseFeaturedDetails: FC<ICourseFeaturedDetailsProps> = ({ duration, format, language, campus, startDate }) => {
  const details: { type: TCourseDetailType; value: string }[] = [
    { type: 'duration', value: duration },
    { type: 'format', value: format },
    { type: 'language', value: language },
    { type: 'campus', value: campus },
    { type: 'startDate', value: startDate }
  ]

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 lg:gap-10 bg-YELLOW py-12 px-7 rounded-lg">
      {details.map((detail) => (
        <CourseDetail key={detail.type} {...detail} />
      ))}
    </div>
  )
}

export default CourseFeaturedDetails
