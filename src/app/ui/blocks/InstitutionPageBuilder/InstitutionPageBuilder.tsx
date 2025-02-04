import type { FC } from 'react'
import About from '../About/About'
import CertificatesAndAwards from '../CertificatesAndAwards/CertificatesAndAwards'
import KeyPoints from '../KeyPoints/KeyPoints'
import CampusSlider, { ICampusSliderItem } from '../CampusSlider/CampusSlider'
import ColumnFormatSchedulesBlock from '../ColumnFormatSchedules/ColumnFormatSchedulesBlock'
import ScholarshipsAndGrants from '../ScholarshipsAndGrants/ScholarshipsAndGrants'
import HeroInstitution from '../HeroInstitution/HeroInstitution'
import { titleToBlockId } from '@utils/titleToBlockId'

interface IInstitutionPageBuilderProps {
  data: {
    institutions_by_id: {
      institutions_trans: [
        {
          commercial_name: string
          intro: string
          description: string
          rank_and_rec: {
            items: [
              {
                type: string
                description: string
                source: string
              },
              {
                type: string
                description: string
                source: string
              },
              {
                type: string
                description: string
                source: string
              }
            ]
          }
          standsfor: {
            title: string
            items: [
              {
                header: string
                body: string
              },
              {
                header: string
                body: string
              },
              {
                header: string
                body: string
              },
              {
                header: string
                body: string
              }
            ]
          }
          institution_id: {
            url: string
            institutions_scholarships_courses: [
              {
                id: string
                scholarships_id: {
                  id: string
                  name: string
                  description: {
                    name: string
                    description: string
                  }
                  is_active: true
                  enum: string
                  academic_course: string
                  languages_id: {
                    name: string
                  }
                }
              }
            ]
            institution_campuses: {
              street_address?: string | null
              city?: string | null
              postal_code?: string | null
              country?: string | null
              phone?: string | null
              images?: string | null
              campuses_trans?: {
                name?: string
                intro?: string
                description?: string
                language_id?: {
                  id?: string
                  name?: string
                }
              }[]
            }[]

            logo: string
            main_image: string
          }
          header_title: string
          header_rank_and_rec: string
          header_standsfor: string
          header_type_and_taxonomy: string
          header_courses: string
          header_scholarships: string
          header_details: {
            number: number
            description: string
          }[]
        }
      ]
    }
  }
}

interface IRequiredCampusData {
  street_address: string
  city: string
  postal_code: string
  phone: string
  images: string
  campuses_trans: {
    name: string
  }[]
}

const InstitutionPageBuilder: FC<IInstitutionPageBuilderProps> = ({ data }) => {
  const institution = data.institutions_by_id.institutions_trans[0]
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

  const { institution_campuses } = institution_id

  const aboutBlockData = header_title && intro
  const certificatesAndAwardsData = header_rank_and_rec && rank_and_rec
  const keyPointsData = header_standsfor && standsfor

  const campusData: ICampusSliderItem[] = (
    institution_campuses.filter(
      ({ phone, campuses_trans, street_address, images, city, postal_code }) =>
        phone && campuses_trans?.[0]?.name && street_address && images && city && postal_code
    ) as IRequiredCampusData[]
  ).map(({ phone, campuses_trans, street_address, images, postal_code, city }) => ({
    phone,
    name: campuses_trans[0].name,
    address: `${street_address}, ${postal_code}, ${city}`,
    href: '', // TODO - 'More info' button
    image: images
  }))

  if (institution_campuses.length > campusData.length)
    console.error(`Missing data on ${institution_campuses.length - campusData.length} some campus`)

  return (
    <div className="flex flex-col gap-24 page">
      {
        <HeroInstitution
          title={commercial_name}
          logo={institution_id.logo}
          image={institution_id.main_image}
          opinions={undefined}
          blocks={[
            { id: header_title, text: header_title },
            { id: header_rank_and_rec, text: header_rank_and_rec },
            { id: header_standsfor, text: header_standsfor },
            { id: header_type_and_taxonomy, text: header_type_and_taxonomy },
            { id: header_courses, text: header_courses },
            { id: header_scholarships, text: header_scholarships }
          ]}
        />
      }

      {aboutBlockData && (
        <div id={titleToBlockId(header_title)}>
          <About title={header_title} intro={intro} description={description} stats={header_details} />{' '}
        </div>
      )}

      {certificatesAndAwardsData && (
        <div id={titleToBlockId(header_rank_and_rec)}>
          <CertificatesAndAwards title={header_rank_and_rec} cards={rank_and_rec.items} />{' '}
        </div>
      )}

      {keyPointsData && (
        <div id={titleToBlockId(header_standsfor)}>
          <KeyPoints title={header_standsfor} list={standsfor.items.map((elm) => elm.body)} />{' '}
        </div>
      )}
      {institution_campuses && <CampusSlider data={campusData} />}
      {
        <div id={titleToBlockId(header_type_and_taxonomy)}>
          {/* TODO */}
          <ColumnFormatSchedulesBlock title={header_type_and_taxonomy} cards={[]} />
        </div>
      }
      {institution_id.institutions_scholarships_courses && (
        <div id={titleToBlockId(header_scholarships)}>
          <ScholarshipsAndGrants
            title={header_scholarships}
            list={institution_id.institutions_scholarships_courses.map((elm) => {
              return { title: elm.scholarships_id.description.name, description: elm.scholarships_id.description.description }
            })}
          />
        </div>
      )}
    </div>
  )
}

export default InstitutionPageBuilder
