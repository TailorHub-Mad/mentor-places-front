import AssetCard, { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import type { GetUniversityQuery } from '../../../../graphql/generated/client'
import { transformCourses } from './utils'

export interface ICourse {
  course_id: {
    id: string
    course_trans: {
      commercial_name: string
    }[]
    images: string
    learning_format_id?: { format_name: string }
    duration: string
    duration_class: string
    tuition_price?: {
      tuition_fee_o: string
      currency: string
    }[]
    is_official?: boolean
  }
}

export type InstitutionCourses = NonNullable<
  NonNullable<NonNullable<NonNullable<GetUniversityQuery['institutions_by_id']>['institution']>[number]>['institution_id']
>['courses']

interface IInstitutionMastersProps {
  courses: InstitutionCourses
  universityName: string
  universityLogo: string
}

const InstitutionMasters: FC<IInstitutionMastersProps> = ({ courses, universityName, universityLogo }) => {
  const t = useTranslations()
  const transformedCourses = transformCourses(courses, universityName, universityLogo, t)

  return (
    <CustomSwiper
      position={SwiperNavigationPosition.TOP_RIGHT}
      items={transformedCourses.map(({ id, title, imageSrc, details }) => {
        return (
          <AssetCard
            key={id}
            variant={EAssetCardVariant.withIcons}
            data={{
              title,
              universityName,
              universityLogo,
              imageSrc,
              details
            }}
          />
        )
      })}
    />
  )
}

export default InstitutionMasters
