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
      <div className="course-syllabus__tabs flex items-center gap-3 border-b border-BLACK/30 mb-4">
        <div className="tabs-buttons">
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
        <div className="type-ects-columns ml-auto">
          <span className="">{t('courseDetails.type')}</span>
          <span className="">{t('courseDetails.ects')}</span>
        </div>
      </div>
      <div className="course-syllabus__subjects-list">
        {terms[openTab].subjects.map((subject, index) => {
          return (
            <div key={`${subject.title}-${index}`} className="course-syllabus__subject-list__item flex items-center justify-between">
              <span className="title">{subject.title}</span>
              <span className="type">{subject.type}</span>
              <span className="ects">{subject.ects}</span>
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
