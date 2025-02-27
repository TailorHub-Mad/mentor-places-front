import type { ICourseSyllabus } from '@components/CourseSyllabus/CourseSyllabus'
import type { InfoCardPriceProps } from '@components/PriceCard/PriceCard'
import type { TAssetDetailOptions } from '@interfaces/assetDetail.type'
import type { GetCourseQuery } from '../../../../graphql/generated/client'

export const createDateString = (dateFunc: {
  __typename?: 'date_functions'
  year?: number | null
  month?: number | null
  day?: number | null
}) => {
  const { day, month, year } = dateFunc
  if (!day || !month || !year) return ''
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
}

interface IAcademicYear {
  year: string
  headings: { name_heading: string; duration_heading: string; type_heading: string; period_heading: string }
  subjects: [{ name: string; duration: string; type: string; period: string | null }]
}

interface IPrice {
  date: string
  course: string
  tuition_fee_o: string
  tuition_fee_d: string
  currency: string
  code: string
  discounts: boolean
}

export type TCoursesCourseId = NonNullable<
  NonNullable<NonNullable<NonNullable<GetCourseQuery['courses_by_id']>['course_trans']>[number]>['course_id']
>

export type TCoursesStandsfor = NonNullable<
  NonNullable<NonNullable<NonNullable<GetCourseQuery['courses_by_id']>['course_trans']>[number]>['standsfor']
>

export const buildFeaturedDetails = (courseData: TCoursesCourseId): TAssetDetailOptions => ({
  duration: `${courseData.duration} ${courseData.duration_class}`,
  format: courseData.learning_format?.map((elm) => elm?.learning_format_id?.format_name).join(' / ') || undefined,
  language: courseData.course_language?.[0]?.languages_format_id?.name || undefined,
  campus: courseData.campuses_courses?.[0]?.campuses_id?.campuses_trans?.[0]?.name || undefined,
  startDate: courseData.start_date
})

export const buildCards = (standsFor: TCoursesStandsfor) =>
  standsFor.items.map((elm: { header: string; body: string }, idx: number) => ({
    infoHeaderTitle: idx + 1,
    title: elm.header,
    description: elm.body
  }))

export const buildCourseSyllabus = (academicYears: IAcademicYear[]) => {
  const terms: ICourseSyllabus[] =
    academicYears?.map((elm) => ({
      subjects: elm.subjects.map((subject) => ({
        title: subject.name,
        type: subject.type,
        ects: subject.duration,
        period: subject.period || '-'
      }))
    })) || []

  const tabs = academicYears?.map((elm) => elm.year) || []

  return { tabs, terms }
}

export const buildPrices = (tuitionPrice: IPrice[], officialTitle: string, discountTitle: string) =>
  tuitionPrice.reduce((acc: InfoCardPriceProps[], price) => {
    acc.push({ infoHeaderTitle: price.tuition_fee_o, title: officialTitle, type: 'official' })
    if (price.discounts) {
      acc.push({ infoHeaderTitle: price.tuition_fee_d, title: discountTitle, type: 'discount' })
    }
    return acc
  }, [])
