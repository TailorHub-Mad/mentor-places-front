import type { ICourseSyllabus, ICourseSyllabusProps, ISubject } from '@components/CourseSyllabus/CourseSyllabus'

const MOCK_COURSE_SYLLABUS_1: ISubject = {
  title: 'Analítica de Marketing Digital y Métricas',
  type: 'OB',
  ects: '6',
  period: '1'
}

const MOCK_COURSE_SYLLABUS_2: ISubject = {
  title: 'Dirección Global de Marketing Digital',
  type: 'ETC',
  ects: '12',
  period: '1'
}

const MOCK_COURSE_SYLLABUS_3: ISubject = {
  title: 'Plan de Marketing Digital',
  type: 'OB',
  ects: '6',
  period: '2'
}

const MOCK_COURSE_TERM_2: ICourseSyllabus = {
  subjects: [MOCK_COURSE_SYLLABUS_1, MOCK_COURSE_SYLLABUS_2, MOCK_COURSE_SYLLABUS_3]
}

const MOCK_COURSE_TERM_1: ICourseSyllabus = {
  subjects: [
    MOCK_COURSE_SYLLABUS_1,
    MOCK_COURSE_SYLLABUS_2,
    MOCK_COURSE_SYLLABUS_3,
    MOCK_COURSE_SYLLABUS_2,
    MOCK_COURSE_SYLLABUS_3,
    MOCK_COURSE_SYLLABUS_2,
    MOCK_COURSE_SYLLABUS_3,
    MOCK_COURSE_SYLLABUS_2,
    MOCK_COURSE_SYLLABUS_3
  ]
}

export const COURSE_SYLLABUS_MOCK: ICourseSyllabusProps = {
  tabs: ['Año 1', 'Año 2'],
  terms: [MOCK_COURSE_TERM_1, MOCK_COURSE_TERM_2]
}
