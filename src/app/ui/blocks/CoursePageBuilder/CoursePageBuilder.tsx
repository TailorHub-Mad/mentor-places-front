import { type FC } from 'react'
import type { GetCourseQuery } from '../../../../graphql/generated/client'
import HeroCourse from '../HeroCourse/HeroCourse'
import { titleToBlockId } from '@utils/titleToBlockId'
import About from '../About/About'
import CourseDetailBlock from '../CourseDetail/CourseDetailBlock'
import ReasonsWhy from '../ReasonsWhy/ReasonsWhy'
import ColumnFormatSchedulesBlock from '../ColumnFormatSchedules/ColumnFormatSchedulesBlock'
import ColumnContent from '../ColumnContent/ColumnContent'
import Admissions from '../Admissions/Admissions'
import { useTranslations } from 'next-intl'
import PriceSection from '../PriceSection/PriceSection'
import ScholarshipsAndGrants from '../ScholarshipsAndGrants/ScholarshipsAndGrants'
import ContactBanner from '@components/ContactBanner/ContactBanner'
import { EColor } from '@theme/foundations/colors.foundations'
import StudentProfile from '../StudentProfile/StudentProfile'
import CourseSyllabusBlock from '../CourseSyllabus/CourseSyllabusBlock'
import UniversityInfo from '../UniversityInfo/UniversityInfo'
import { useCoursePageBuilderDto } from './useCoursePageBuilder.dto'

interface ICoursePageBuilderProps {
  data: GetCourseQuery
}

const CoursePageBuilder: FC<ICoursePageBuilderProps> = ({ data }) => {
  const t = useTranslations()
  const dto = useCoursePageBuilderDto(data)
  if (!dto) return null

  const course = data.courses_by_id?.course_trans?.[0]

  if (!course) return null

  const {
    commercial_name,
    course_id,
    header_title,
    reason_header,
    format_schedules,
    title_career_opportunities,
    admissions,
    header_scholarships
  } = course

  if (!course_id) return null

  const { institutions, profiles } = course_id

  const {
    heroData,
    aboutBlockData,
    courseDetailData,
    reasonsWhyData,
    courseSyllabusData,
    formatSchedulesData,
    admissionsData,
    careerOpportunitiesData,
    scholarshipsData,
    priceData
  } = dto

  return (
    <div className="max-w-[1440px]">
      {heroData && <HeroCourse {...heroData} />}
      <div className="flex flex-col gap-24 page py-16">
        {header_title && aboutBlockData && (
          <div id={titleToBlockId(header_title)}>
            <About {...aboutBlockData} />
          </div>
        )}

        {commercial_name && courseDetailData && (
          <div id={titleToBlockId(commercial_name)}>
            <CourseDetailBlock {...courseDetailData} />
          </div>
        )}

        {reason_header && reasonsWhyData && (
          <div id={titleToBlockId(reason_header)}>
            <ReasonsWhy {...reasonsWhyData} />
          </div>
        )}
        {courseSyllabusData.courseSyllabus.terms.length > 0 && (
          <div id={titleToBlockId(t('syllabus'))}>
            <CourseSyllabusBlock {...courseSyllabusData} />
          </div>
        )}

        {format_schedules && formatSchedulesData && (
          <div id={titleToBlockId(format_schedules)}>
            <ColumnFormatSchedulesBlock {...formatSchedulesData} />
          </div>
        )}

        {admissions && admissionsData && (
          <div id={titleToBlockId(admissions)}>
            <Admissions {...admissionsData} />
          </div>
        )}

        {profiles && profiles[0] && profiles[0].content_title && (
          <div id={titleToBlockId(profiles[0].content_title)}>
            <StudentProfile profile={profiles[0]} />
          </div>
        )}

        {title_career_opportunities && careerOpportunitiesData && (
          <div id={titleToBlockId(title_career_opportunities)}>
            <ColumnContent {...careerOpportunitiesData} />
          </div>
        )}

        <div id={titleToBlockId(t('prices'))}>
          <PriceSection {...priceData} />
        </div>

        {header_scholarships && scholarshipsData && (
          <div id={titleToBlockId(header_scholarships)}>
            <ScholarshipsAndGrants {...scholarshipsData} />
          </div>
        )}

        <ContactBanner
          topText={t('contactBanner.topText')}
          title={t('contactBanner.title')}
          button={t('contactBanner.button')}
          backgroundColor={EColor.YELLOW}
        />

        {institutions && institutions[0] && <UniversityInfo institutions={institutions} />}
      </div>
    </div>
  )
}

export default CoursePageBuilder
