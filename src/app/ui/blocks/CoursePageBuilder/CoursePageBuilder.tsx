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
import { IContentCardData } from '@components/ContentCard/ContentCard'

interface ICoursePageBuilderProps {
  data: GetCourseQuery
}

const CoursePageBuilder: FC<ICoursePageBuilderProps> = ({ data }) => {
  const course = data.courses_by_id?.course_trans?.[0]

  if (!course) return null

  const { commercial_name, course_id, intro, description, methodology, info_blocks, header_title, reason_header, standsfor } = course

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
    places_available
  } = course_id

  const university = institutions?.[0]?.institution_id

  const featuredDetails: TAssetDetailOptions = {
    duration: `${duration} ${duration_class}`,
    format: learning_format?.format_name || undefined,
    language: course_language?.[0]?.languages_format_id?.name || undefined,
    campus: campuses_courses?.[0]?.campuses_id?.campuses_trans?.[0]?.name || undefined,
    startDate: start_date
  }

  const universityName = university?.institutions_trans?.[0]?.commercial_name

  const heroData = commercial_name && universityName && images && university && featuredDetails
  const aboutBlockData = intro && header_title
  const courseDetailData = commercial_name
  const reasonsWhyData = reason_header

  const cards: IContentCardData[] = standsfor.items.map((elm: { header: string; body: string }, idx: number) => ({
    infoHeaderTitle: idx + 1,
    title: elm.header,
    description: elm.body
  }))

  const headersAndData = [{ header: header_title, data: aboutBlockData }]
  const blocks = getBlocks(headersAndData)

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
    </div>
  )
}

export default CoursePageBuilder
