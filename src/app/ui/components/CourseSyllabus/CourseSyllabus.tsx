'use client'

import { type FC, useState } from 'react'
import { useTranslations } from 'next-intl'
import { cx } from '@utils/cx'

const CourseSyllabus: FC<ICourseSyllabusProps> = ({ terms, tabs }) => {
  const termsLength = terms.length
  const t = useTranslations()

  const [openTab, setOpenTab] = useState(0)
  const [showAllSubjects, setShowAllSubjects] = useState(false) // State for toggling between limited and full view

  const handleOpenTab = (index: number) => setOpenTab(index)

  const SUBJECTS_LIMIT = 6 // Define limit for initial subjects

  const displayedSubjects = showAllSubjects ? terms[openTab].subjects : terms[openTab].subjects.slice(0, SUBJECTS_LIMIT) // Slice subjects if limit is not toggled

  return (
    <div className="course-syllabus">
      <div className="course-syllabus__tabs grid grid-cols-1 md:grid-cols-10 gap-4 border-b border-BLACK/10 ">
        <div className="tabs-buttons col-span-7">
          {Array.from({ length: termsLength }, (_, index) => (
            <button
              className={cx('pr-4 py-2', {
                'text-BLACK/30': index !== openTab
              })}
              onClick={() => handleOpenTab(index)}
              key={`course-syllabus__tabs-${index}`}>
              <span className="tabs-string mr-1 capitalize">{tabs[index]}</span>
            </button>
          ))}
        </div>
        <span className="text-center text-BLACK/60 font-s text-s hidden md:block">{t('courseDetails.type')}</span>
        <span className="text-center text-BLACK/60 font-s text-s hidden md:block">{t('courseDetails.ects')}</span>
        <span className="text-center text-BLACK/60 font-s text-s hidden md:block">{t('courseDetails.period')}</span>
      </div>
      <div className="course-syllabus__subjects-list">
        {displayedSubjects.map((subject, index) => (
          <div
            key={`${subject.title}-${index}`}
            className="course-syllabus__subject-list__item grid grid-cols-2 md:grid-cols-10 gap-2 justify-between border-b border-BLACK/10 py-4">
            <span className="title col-span-2 md:col-span-7 text-s font-s">{subject.title}</span>
            <div className="type text-start md:text-center md:col-span-1 text-s font-s">
              <span className="md:hidden text-s font-s">{t('courseDetails.type')}: </span>
              {subject.type}
            </div>
            <div className="ects text-start md:text-center md:col-span-1 text-s font-s">
              <span className="md:hidden text-s font-s">{t('courseDetails.ects')}: </span>
              {subject.ects}
            </div>
            <div className="ects text-start md:text-center md:col-span-1 text-s font-s">
              <span className="md:hidden text-s font-s">{t('courseDetails.ects')}: </span>
              {subject.period}
            </div>
          </div>
        ))}
        {terms[openTab].subjects.length > SUBJECTS_LIMIT && (
          <button
            className="load-more-btn mt-6 text-s font-s text-BLACK/40 underline underline-offset-4"
            onClick={() => setShowAllSubjects((prev) => !prev)}>
            {showAllSubjects ? t('actions.showLess') : t('actions.showMore')}
          </button>
        )}
      </div>
    </div>
  )
}

export default CourseSyllabus

export interface ISubject {
  title: string
  type: string
  ects: string
  period: string
}

export interface ICourseSyllabus {
  subjects: ISubject[]
}

export interface ICourseSyllabusProps {
  tabs: string[]
  terms: ICourseSyllabus[]
}
