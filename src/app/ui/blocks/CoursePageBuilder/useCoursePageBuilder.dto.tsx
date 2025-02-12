import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import type { GetCourseQuery } from '../../../../graphql/generated/client'
import type { TAssetDetailOptions } from '@interfaces/assetDetail.type'
import { getBlocks } from '../InstitutionPageBuilder/utils'
import type { IHeroCourseProps } from '../HeroCourse/HeroCourse'
import type { IAboutProps } from '../About/About'
import type { ICourseDetailBlockProps } from '../CourseDetail/CourseDetailBlock'
import type { IReasonsWhyProps } from '../ReasonsWhy/ReasonsWhy'
import type { ICourseSyllabusBlockProps } from '../CourseSyllabus/CourseSyllabusBlock'
import type { ICourseSyllabus } from '@components/CourseSyllabus/CourseSyllabus'
import type { IFormatSchedulesBlockProps } from '../ColumnFormatSchedules/ColumnFormatSchedulesBlock'
import type { IAssetFeaturesCardProps } from '@components/AssetFeaturesCard/AssetFeaturesCard'
import type { IAdmissionsProps } from '../Admissions/Admissions'
import { createDateString } from './utils'
import { useTranslations } from 'next-intl'
import type { IColumnContentProps } from '../ColumnContent/ColumnContent'
import type { IScholarshipsAndGrantsProps } from '../ScholarshipsAndGrants/ScholarshipsAndGrants'
import type { IPriceSectionProps } from '../PriceSection/PriceSection'
import type { InfoCardPriceProps } from '@components/PriceCard/PriceCard'

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

interface ICousePageBuilderDto {
  heroData: IHeroCourseProps | null
  aboutBlockData: IAboutProps | null
  courseDetailData: ICourseDetailBlockProps | null
  reasonsWhyData: IReasonsWhyProps | null
  courseSyllabusData: ICourseSyllabusBlockProps
  formatSchedulesData: IFormatSchedulesBlockProps | null
  admissionsData: IAdmissionsProps | null
  careerOpportunitiesData: IColumnContentProps | null
  scholarshipsData: IScholarshipsAndGrantsProps | null
  priceData: IPriceSectionProps
}

interface ILearningFormat {
  __typename: string
  learning_format_id: { __typename: string; format_name: string }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildFeaturedDetails = (courseData: any): TAssetDetailOptions => ({
  duration: `${courseData.duration} ${courseData.duration_class}`,
  format: courseData.learning_format?.map((elm: ILearningFormat) => elm?.learning_format_id?.format_name).join(' / ') || undefined,
  language: courseData.course_language?.[0]?.languages_format_id?.name || undefined,
  campus: courseData.campuses_courses?.[0]?.campuses_id?.campuses_trans?.[0]?.name || undefined,
  startDate: courseData.start_date
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildCards = (standsFor: any) =>
  standsFor.items.map((elm: { header: string; body: string }, idx: number) => ({
    infoHeaderTitle: idx + 1,
    title: elm.header,
    description: elm.body
  }))

const buildCourseSyllabus = (academicYears: IAcademicYear[]) => {
  const terms: ICourseSyllabus[] = academicYears.map((elm) => ({
    subjects: elm.subjects.map((subject) => ({
      title: subject.name,
      type: subject.type,
      ects: subject.duration,
      period: subject.period || '-'
    }))
  }))

  const tabs = academicYears.map((elm) => elm.year)

  return { tabs, terms }
}

const buildPrices = (tuitionPrice: IPrice[], officialTitle: string, discountTitle: string) =>
  tuitionPrice.reduce((acc: InfoCardPriceProps[], price) => {
    acc.push({ infoHeaderTitle: price.tuition_fee_o, title: officialTitle, type: 'official' })
    if (price.discounts) {
      acc.push({ infoHeaderTitle: price.tuition_fee_d, title: discountTitle, type: 'discount' })
    }
    return acc
  }, [])

export const useCoursePageBuilderDto = (data: GetCourseQuery): ICousePageBuilderDto | null => {
  const t = useTranslations()
  const course = data.courses_by_id?.course_trans?.[0]

  if (!course) return null

  const {
    commercial_name,
    course_id,
    intro,
    description,
    methodology,
    info_blocks,
    header_title,
    reason_header,
    standsfor,
    format_schedules,
    title_career_opportunities,
    career_opportunities,
    course_structure,
    schedules,
    admissions,
    requirements,
    header_scholarships
  } = course

  if (!course_id) return null

  const {
    images,
    institutions,
    learning_format,
    meta_tags,
    type,
    is_official,
    ects,
    places_available,
    careers_list,
    learning_pace,
    start_date_func,
    end_date_func,
    tuition_price,
    profiles
  } = course_id

  const university = institutions?.[0]?.institution_id
  const universityName = university?.institutions_trans?.[0]?.commercial_name

  const featuredDetails = buildFeaturedDetails(course_id)
  const cards = buildCards(standsfor)
  const { tabs: courseSyllabusTabs, terms: courseSyllabusTerms } = buildCourseSyllabus(course_structure.academic_years)
  const prices = buildPrices(tuition_price, t('courseDetails.officialPrice'), t('courseDetails.discountPrice'))

  const requiredHeroData = commercial_name && universityName && images && university && featuredDetails
  const requiredAboutBlockData = intro && header_title
  const requiredCourseDetailData = commercial_name
  const requiredReasonsWhyData = reason_header
  const requiredFormatSchedulesData = format_schedules
  const requiredAdmissionsData = admissions && start_date_func && end_date_func
  const requiredCareerOpportunitiesData = title_career_opportunities && career_opportunities
  const requiredScholarshipsData = header_scholarships && institutions?.[0]?.institution_id?.institutions_scholarships_courses

  const headersAndData = [
    { header: header_title, data: requiredAboutBlockData },
    { header: commercial_name, data: requiredCourseDetailData },
    { header: reason_header, data: requiredReasonsWhyData && cards },
    { header: t('syllabus'), data: undefined },
    { header: format_schedules, data: requiredFormatSchedulesData },
    { header: admissions, data: requiredAdmissionsData },
    { header: profiles?.[0]?.content_title, data: profiles && profiles[0] },
    { header: title_career_opportunities, data: requiredCareerOpportunitiesData },
    { header: t('prices'), data: undefined },
    { header: header_scholarships, data: requiredScholarshipsData }
  ]
  const blocks = getBlocks(headersAndData)

  const formatCard: IAssetFeaturesCardProps = {
    icon: 'campus',
    description: '', // TODO?
    tags: (learning_format || []).map((elm) => ({ label: elm?.learning_format_id?.format_name || '' }))
  }

  const campusCard: IAssetFeaturesCardProps = {
    icon: 'duration',
    description: schedules || '',
    tags: (learning_pace || []).map((elm) => ({ label: elm?.learning_pace_id?.pace_name || '' }))
  }

  return {
    heroData: requiredHeroData
      ? {
          image: images,
          card: {
            variant: EAssetCardVariant.hero,
            data: {
              title: commercial_name,
              universityName,
              universityLogo: university?.logo || undefined
            }
          },
          featuredDetails,
          blocks
        }
      : null,
    aboutBlockData: requiredAboutBlockData
      ? {
          title: header_title,
          intro,
          description
        }
      : null,
    courseDetailData: requiredCourseDetailData
      ? {
          title: commercial_name,
          tags: meta_tags,
          type,
          isOfficial: is_official || undefined,
          ects: ects || undefined,
          seats: places_available || undefined,
          methodology: methodology || undefined,
          customItems: info_blocks.items
        }
      : null,
    reasonsWhyData: requiredReasonsWhyData
      ? {
          title: reason_header,
          cards
        }
      : null,
    courseSyllabusData: {
      title: t('syllabus'),
      courseSyllabus: { tabs: courseSyllabusTabs, terms: courseSyllabusTerms }
    },
    formatSchedulesData: requiredFormatSchedulesData
      ? {
          title: format_schedules,
          cards: [formatCard, campusCard]
        }
      : null,
    admissionsData: requiredAdmissionsData
      ? {
          title: admissions,
          description: requirements,
          start: { date: createDateString(start_date_func), text: t('courseDetails.startDate') },
          application: {
            date: createDateString(end_date_func),
            text: t('courseDetails.applicationDate')
          }
        }
      : null,
    careerOpportunitiesData: requiredCareerOpportunitiesData
      ? {
          columnTitle: { title: title_career_opportunities, theme: 'dark' },
          columnContent: { richText: career_opportunities, list: careers_list.map((elm: string) => ({ title: elm })) }
        }
      : null,
    scholarshipsData: requiredScholarshipsData
      ? {
          title: header_scholarships,
          list: (institutions?.[0]?.institution_id?.institutions_scholarships_courses || [])
            .filter((elm) => elm?.scholarships_id)
            .map((elm) => {
              return { title: elm?.scholarships_id?.description.name, description: elm?.scholarships_id?.description.description }
            })
        }
      : null,
    priceData: {
      title: t('prices'),
      description: requirements,
      prices
    }
  }
}
