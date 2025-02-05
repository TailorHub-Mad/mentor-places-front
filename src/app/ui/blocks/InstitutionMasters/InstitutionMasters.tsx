import AssetCard, { EAssetCardVariant } from '@components/AssetCard/AssetCard'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'
import type { GetUniversityQuery } from '../../../../graphql/generated/client'
import type { IAssetCardData, IAssetCardDetail } from '@interfaces/assetCard.interface'

interface ICourse {
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

  const transformedCourses: (IAssetCardData & { id: string })[] = (
    courses?.filter((course) => {
      if (!course?.course_id) return false
      const { course_trans, images } = course.course_id
      return course_trans && course_trans[0]?.commercial_name && images
    }) as ICourse[]
  ).map((course) => {
    const details: IAssetCardDetail[] = []
    const { course_trans, images, learning_format_id, duration, duration_class, tuition_price, is_official, id } = course.course_id
    if (learning_format_id) {
      details.push({
        type: 'format',
        value: learning_format_id.format_name
      })
    }
    if (duration && duration_class) {
      details.push({
        type: 'duration',
        value: `${duration} ${duration_class}`
      })
    }
    if (tuition_price?.[0]) {
      details.push({
        type: 'price',
        value: `${tuition_price[0].tuition_fee_o} ${tuition_price[0].currency}`
      })
    }
    if (typeof is_official === 'boolean') {
      details.push({
        type: 'official',
        value: is_official ? t('actions.yes') : t('actions.no')
      })
    }
    return {
      id,
      title: course_trans[0].commercial_name,
      universityName,
      universityLogo,
      imageSrc: images,
      details: details.length > 0 ? details : undefined
    }
  })

  return (
    <CustomSwiper
      position={SwiperNavigationPosition.TOP_RIGHT}
      items={transformedCourses.map((course) => {
        const { id, title, imageSrc, details } = course
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
      // items={(courses || []).map((course) => {
      //   if (!course?.course_id) return
      //   const { course_trans, learning_format_id, duration, duration_class, tuition_price, is_official, id, images } = course.course_id
      //   return (
      //     <AssetCard
      //       key={id}
      //       variant={EAssetCardVariant.withIcons}
      //       data={{
      //         title: course_trans[0].commercial_name,
      //         universityName,
      //         universityLogo,
      //         imageSrc: images,
      //         details: [
      //           {
      //             type: 'format',
      //             value: learning_format_id.format_name
      //           },
      //           {
      //             type: 'duration',
      //             value: `${duration} ${duration_class}`
      //           },
      //           {
      //             type: 'price',
      //             value: `${tuition_price[0].tuition_fee_o} ${tuition_price[0].currency}`
      //           },
      //           {
      //             type: 'official',
      //             value: is_official ? t('actions.yes') : t('actions.no')
      //           }
      //         ]
      //       }}
      //     />
      //   )
      // })}
    />
  )
}

export default InstitutionMasters
