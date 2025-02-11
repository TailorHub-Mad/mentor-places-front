import type { FC } from 'react'
import CourseSyllabus, { type ICourseSyllabusProps } from '@components/CourseSyllabus/CourseSyllabus'

export interface ICourseSyllabusBlockProps {
  title: string
  courseSyllabus: ICourseSyllabusProps
}

const CourseSyllabusBlock: FC<ICourseSyllabusBlockProps> = ({ courseSyllabus, title }) => {
  return (
    <div className="course-syllabus-block bg-GRAY rounded-[8px] px-[20px] md:px-[32px] py-[60px] md:py-[80px]">
      <h2 className="text-m md:text-xl-mobile font-xl mb-[50px]">{title}</h2>
      <CourseSyllabus tabs={courseSyllabus.tabs} terms={courseSyllabus.terms} />
    </div>
  )
}

export default CourseSyllabusBlock
