import AssetCard, { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

// TODO - to be modified by Gabi's dyncamic interfaces
interface ICourse {
  course_id: {
    course_trans: [
      {
        commercial_name: string
      }
    ]
    is_official: boolean
    id: string
    type: string
    duration: string
    duration_class: string
    learning_format_id: {
      format_name: string
    }
    learning_pace_id: {
      pace_name: string
    }
    meta_tags: string[]
    images: string
    tuition_price: [
      {
        date: string
        course: string
        tuition_fee_o: string
        tuition_fee_d: string
        currency: string
        code: string
        discounts: boolean
      }
    ]
    careers_list: string[]
  }
}

interface IInstitutionMastersProps {
  courses: ICourse[]
  universityName: string
  universityLogo: string
}

const InstitutionMasters: FC<IInstitutionMastersProps> = ({ courses, universityName, universityLogo }) => {
  const t = useTranslations()

  return (
    <CustomSwiper
      position={SwiperNavigationPosition.TOP_RIGHT}
      items={courses.map(({ course_id }) => {
        const { course_trans, learning_format_id, duration, duration_class, tuition_price, is_official, id } = course_id
        return (
          <AssetCard
            key={id}
            variant={EAssetCardVariant.withIcons}
            data={{
              title: course_trans[0].commercial_name,
              universityName,
              universityLogo,
              imageSrc: course_id.images,
              details: [
                {
                  type: 'format',
                  value: learning_format_id.format_name
                },
                {
                  type: 'duration',
                  value: `${duration} ${duration_class}`
                },
                {
                  type: 'price',
                  value: `${tuition_price[0].tuition_fee_o} ${tuition_price[0].currency}`
                },
                {
                  type: 'official',
                  value: is_official ? t('actions.yes') : t('actions.no')
                }
              ]
            }}
          />
        )
      })}
    />
  )
}

export default InstitutionMasters
