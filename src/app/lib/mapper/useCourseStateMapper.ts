import { useFilterCollectionByFields } from '@utils/useFilterCollectionByFields'
import { type FilterCoursesQuery } from '../../../graphql/generated/client'
import { EFilterType, type IFilterCategory } from '@interfaces/filterSidebar.interfaces'

type CourseState = {
  [key: string]: number
}

export const useCourseStateMapper = (courses: FilterCoursesQuery['courses']): IFilterCategory => {
  const coursesTransformed = courses.map((course) => ({
    ...(course.course_trans?.[0] || {}) // course_trans is always length === 1 by design
  }))

  const filteredCourses = useFilterCollectionByFields(coursesTransformed, ['commercial_name'])

  const statesCourses: CourseState = {}

  filteredCourses.forEach((course) => {
    if (course?.course_id?.campuses_courses) {
      const courseStates: CourseState = {}
      course.course_id.campuses_courses.forEach((campusCourse) => {
        if (campusCourse?.campuses_id?.state) {
          if (!courseStates[campusCourse.campuses_id.state]) {
            courseStates[campusCourse.campuses_id.state] = 1
          }
        }
      })
      Object.entries(courseStates).forEach(([state, count]) => {
        if (!statesCourses[state]) {
          statesCourses[state] = 0
        }
        statesCourses[state] += count
      })
    }
  })

  return {
    title: 'Donde',
    id: 'states',
    filters: Object.entries(statesCourses).map(([state, count]) => ({
      title: state,
      id: 'states',
      type: EFilterType.CHECKBOX,
      value: state,
      count
    }))
  }
}
