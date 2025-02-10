import type { FC } from 'react'
import type { GetCourseQuery } from '../../../../graphql/generated/client'
import HeroCourse from '../HeroCourse/HeroCourse'
import { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import type { TAssetDetailOptions } from '@interfaces/assetDetail.type'
import { titleToBlockId } from '@utils/titleToBlockId'
import About from '../About/About'
import CourseDetailBlock from '../CourseDetail/CourseDetailBlock'
import { getBlocks } from '../InstitutionPageBuilder/utils'
import ReasonsWhy from '../ReasonsWhy/ReasonsWhy'
import type { IContentCardData } from '@components/ContentCard/ContentCard'
import CourseSyllabus, { type ICourseSyllabus } from '@components/CourseSyllabus/CourseSyllabus'
import ColumnFormatSchedulesBlock from '../ColumnFormatSchedules/ColumnFormatSchedulesBlock'
import ColumnContent from '../ColumnContent/ColumnContent'

interface ICoursePageBuilderProps {
  data: GetCourseQuery
}

interface IAcademicYear {
  year: string
  headings: { name_heading: string; duration_heading: string; type_heading: string; period_heading: string }
  subjects: [{ name: string; duration: string; type: string; period: string | null }]
}

const CoursePageBuilder: FC<ICoursePageBuilderProps> = ({ data }) => {
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
    course_structure
  } = course

  if (!course_id) return null

  const {
    images,
    institutions,
    start_date,
    course_language,
    learning_format,
    duration,
    duration_class,
    campuses_courses,
    meta_tags,
    type,
    is_official,
    ects,
    places_available,
    careers_list
  } = course_id

  const university = institutions?.[0]?.institution_id

  const featuredDetails: TAssetDetailOptions = {
    duration: `${duration} ${duration_class}`,
    format: learning_format?.map((elm) => elm?.learning_format_id?.format_name).join(' / ') || undefined,
    language: course_language?.[0]?.languages_format_id?.name || undefined,
    campus: campuses_courses?.[0]?.campuses_id?.campuses_trans?.[0]?.name || undefined,
    startDate: start_date
  }

  const universityName = university?.institutions_trans?.[0]?.commercial_name

  const heroData = commercial_name && universityName && images && university && featuredDetails
  const aboutBlockData = intro && header_title
  const courseDetailData = commercial_name
  const reasonsWhyData = reason_header
  const formatSchedulesData = format_schedules
  const careerOpportunitiesData = title_career_opportunities && career_opportunities

  const cards: IContentCardData[] = standsfor.items.map((elm: { header: string; body: string }, idx: number) => ({
    infoHeaderTitle: idx + 1,
    title: elm.header,
    description: elm.body
  }))

  const headersAndData = [{ header: header_title, data: aboutBlockData }]
  const blocks = getBlocks(headersAndData)

  const courseSyllabusTerms: ICourseSyllabus[] = course_structure.academic_years.map((elm: IAcademicYear) => {
    return {
      subjects: elm.subjects.map((subject) => {
        return {
          title: subject.name,
          type: subject.type,
          ects: subject.duration,
          period: subject.period || '-'
        }
      })
    }
  })

  const courseSyllabusTabs = course_structure.academic_years.map((elm: IAcademicYear) => {
    return elm.year
  })

  return (
    <div className="flex flex-col gap-24 page py-16">
      {heroData && (
        <HeroCourse
          image={images}
          card={{
            variant: EAssetCardVariant.hero,
            data: {
              title: commercial_name,
              universityName,
              universityLogo: university.logo || undefined
            }
          }}
          featuredDetails={featuredDetails}
          blocks={blocks}
        />
      )}

      {aboutBlockData && (
        <div id={titleToBlockId(header_title)}>
          <About title={header_title} intro={intro} description={description} />
        </div>
      )}

      {courseDetailData && (
        <CourseDetailBlock
          title={commercial_name}
          tags={meta_tags}
          type={type}
          isOfficial={is_official || undefined}
          ects={ects || undefined}
          seats={places_available || undefined}
          methodology={methodology || undefined}
          customItems={info_blocks.items}
        />
      )}

      {reasonsWhyData && cards && <ReasonsWhy title={reason_header} cards={cards} />}

      {<CourseSyllabus tabs={courseSyllabusTabs} terms={courseSyllabusTerms} />}

      {formatSchedulesData && <ColumnFormatSchedulesBlock title={format_schedules} cards={[]} />}

      {careerOpportunitiesData && (
        <ColumnContent
          columnTitle={{ title: title_career_opportunities, theme: 'dark' }}
          columnContent={{ richText: career_opportunities, list: careers_list.map((elm: string) => ({ title: elm })) }}
        />
      )}
    </div>
  )
}

export default CoursePageBuilder
