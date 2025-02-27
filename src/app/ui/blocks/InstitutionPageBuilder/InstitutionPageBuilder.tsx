import type { FC } from 'react'
import About from '../About/About'
import CertificatesAndAwards from '../CertificatesAndAwards/CertificatesAndAwards'
import KeyPoints from '../KeyPoints/KeyPoints'
import CampusSlider from '../CampusSlider/CampusSlider'
import ColumnFormatSchedulesBlock from '../ColumnFormatSchedules/ColumnFormatSchedulesBlock'
import ScholarshipsAndGrants from '../ScholarshipsAndGrants/ScholarshipsAndGrants'
import HeroInstitution from '../HeroInstitution/HeroInstitution'
import { titleToBlockId } from '@utils/titleToBlockId'
import InstitutionMasters from '../InstitutionMasters/InstitutionMasters'
import type { GetUniversityQuery } from '../../../../graphql/generated/client'
import { getBlocks, getCampusData } from './utils'

interface IInstitutionPageBuilderProps {
  data: GetUniversityQuery
}

/**
 * TODO
 * - Add fav button
 * - 'More info' button on campus card
 * - Oferta educativa
 */

const InstitutionPageBuilder: FC<IInstitutionPageBuilderProps> = ({ data }) => {
  const institution = data.institutions_by_id?.institution?.[0]

  if (!institution) return null

  const {
    commercial_name,
    header_title,
    intro,
    description,
    header_details,
    header_rank_and_rec,
    rank_and_rec,
    header_standsfor,
    standsfor,
    institution_id,
    header_type_and_taxonomy,
    header_scholarships,
    header_courses
  } = institution

  if (!institution_id) return null

  const { institution_campuses, courses, logo, main_image, institutions_scholarships_courses } = institution_id

  const heroData = commercial_name && logo && main_image
  const aboutBlockData = header_title && intro
  const certificatesAndAwardsData = header_rank_and_rec && rank_and_rec
  const keyPointsData = header_standsfor && standsfor
  const coursesData = header_courses && courses && commercial_name && logo
  const scholarshipsData = header_scholarships && institutions_scholarships_courses
  const educationalOptionsData = header_type_and_taxonomy // TODO - missing data

  const headersAndData = [
    { header: header_title, data: aboutBlockData },
    { header: header_rank_and_rec, data: certificatesAndAwardsData },
    { header: header_standsfor, data: keyPointsData },
    { header: header_type_and_taxonomy, data: educationalOptionsData },
    { header: header_courses, data: coursesData },
    { header: header_scholarships, data: scholarshipsData }
  ]
  const blocks = getBlocks(headersAndData)
  const campusData = getCampusData(institution_id)

  if (institution_campuses && institution_campuses.length > campusData.length)
    console.error(`Missing data on ${institution_campuses.length - campusData.length} some campus`)

  return (
    <div className="flex flex-col gap-24 page bg-GRAY py-16">
      {heroData && <HeroInstitution title={commercial_name} logo={logo} image={main_image} opinions={undefined} blocks={blocks} />}

      {aboutBlockData && (
        <div id={titleToBlockId(header_title)}>
          <About title={header_title} intro={intro} description={description} stats={header_details} />
        </div>
      )}

      {certificatesAndAwardsData && rank_and_rec.items?.lenght > 0 && (
        <div id={titleToBlockId(header_rank_and_rec)}>
          <CertificatesAndAwards title={header_rank_and_rec} cards={rank_and_rec.items} />
        </div>
      )}

      {keyPointsData && (
        <div id={titleToBlockId(header_standsfor)}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <KeyPoints title={header_standsfor} list={standsfor.items.map((elm: any) => elm.body)} />
        </div>
      )}

      {campusData.length > 0 && <CampusSlider data={campusData} />}

      {educationalOptionsData && (
        <div id={titleToBlockId(header_type_and_taxonomy)}>
          {/* TODO */}
          <ColumnFormatSchedulesBlock title={header_type_and_taxonomy} cards={[]} />
        </div>
      )}

      {coursesData && (
        <div id={titleToBlockId(header_courses)}>
          <InstitutionMasters courses={courses} universityName={commercial_name} universityLogo={logo} />
        </div>
      )}

      {scholarshipsData && (
        <div id={titleToBlockId(header_scholarships)}>
          <ScholarshipsAndGrants
            title={header_scholarships}
            list={institutions_scholarships_courses.map((elm) => {
              return { title: elm?.scholarships_id?.description.name, description: elm?.scholarships_id?.description.description }
            })}
          />
        </div>
      )}
    </div>
  )
}

export default InstitutionPageBuilder
