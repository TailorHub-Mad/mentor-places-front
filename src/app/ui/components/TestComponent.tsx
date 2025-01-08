'use client'
import type { type FC } from 'react'

import { useGetCoursesQuery } from '../../../graphql/generated/client'
// TODO: TEST USER HOOKS COURSES
const TestComponent: FC = () => {
  const { data, loading, error } = useGetCoursesQuery({
    variables: {
      filter: {
        o_language: {
          name: {
            _eq: 'English'
          }
        }
      }
    }
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {data?.courses.map((course) => (
        <div key={course.id}>
          {course?.id} - {course?.commercial_name} - {course?.o_language?.name}
        </div>
      ))}
    </div>
  )
}

export default TestComponent
