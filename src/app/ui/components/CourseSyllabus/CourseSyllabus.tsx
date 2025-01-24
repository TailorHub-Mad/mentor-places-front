import { type FC, useState } from 'react'
import { useTranslations } from 'next-intl'
import { cx } from '@utils/cx'

const CourseSyllabus: FC<ICourseSyllabusProps> = ({ terms, period }) => {
  const termsLength = terms.length
  const t = useTranslations()
  const termsPeriodString = t(`courseDetails.period.${period}`)

  const [openTab, setOpenTab] = useState(0)

  const handleOpenTab = (index: number) => {
    setOpenTab(index)
  }

  return (
    <div className="course-syllabus">
      <div className="course-syllabus__tabs grid grid-cols-1 md:grid-cols-10 gap-4 border-b border-BLACK/10 ">
        <div className="tabs-buttons col-span-8">
          {Array.from({ length: termsLength }, (_, index) => {
            return (
              <button
                className={cx('pr-4 py-2', {
                  'text-BLACK/30': index !== openTab
                })}
                onClick={() => handleOpenTab(index)}
                key={`course-syllabus__tabs-${index}`}>
                <span className="period-string mr-1 capitalize">{termsPeriodString}</span>
                <span className="period-number">{index}</span>
              </button>
            )
          })}
        </div>
        <span className="text-center text-BLACK/60 font-s text-s hidden md:block">{t('courseDetails.type')}</span>
        <span className="text-center text-BLACK/60 font-s text-s hidden md:block">{t('courseDetails.ects')}</span>
      </div>
      <div className="course-syllabus__subjects-list">
        {terms[openTab].subjects.map((subject, index) => {
          return (
            <div
              key={`${subject.title}-${index}`}
              className="course-syllabus__subject-list__item grid grid-cols-2 md:grid-cols-10 gap-2 justify-between border-b border-BLACK/10 py-4">
              <span className="title col-span-2 md:col-span-8 text-s font-s">{subject.title}</span>
              <div className="type text-start md:text-center md:col-span-1 text-s font-s">
                <span className="md:hidden text-s font-s">{t('courseDetails.type')}: </span>
                {subject.type}
              </div>
              <div className="ects text-start md:text-center md:col-span-1 text-s font-s">
                <span className="md:hidden text-s font-s">{t('courseDetails.ects')}: </span>
                {subject.ects}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CourseSyllabus

export interface ISubject {
  title: string
  type: string
  ects: number
}

export interface ICourseSyllabus {
  subjects: ISubject[]
}

export interface ICourseSyllabusProps {
  period: 'year' | 'semester' | 'term'
  terms: ICourseSyllabus[]
}
