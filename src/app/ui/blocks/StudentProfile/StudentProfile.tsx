'use client'

import type { FC } from 'react'
import type { ProfileInfoFragment } from '../../../../graphql/generated/client'
import CustomSwiper from '@components/Swiper/CustomSwiper'
import { SwiperNavigationPosition } from '@components/Swiper/components/SwiperNatigation'
import SurveyStatCard from '@components/SurveyStatCard/SurveyStatCard'

interface IStudentProfileProps {
  profile: ProfileInfoFragment
}

interface IProfileData {
  date: string
  source: string
  question: string
  values: string[]
  unit: string[]
}

const StudentProfile: FC<IStudentProfileProps> = ({ profile }) => {
  const { content_title, students, target, data } = profile

  const items = data.map((elm: IProfileData) => {
    return (
      <SurveyStatCard
        key={elm.question}
        question={elm.question}
        stats={elm.unit.map((u, idx) => {
          return { label: u, value: elm.values[idx] }
        })}
      />
    )
  })

  return (
    <div className="bg-BLUE_LIGHT md:rounded-lg py-12 px-5 md:py-20 md:px-9">
      <h3 className="m md:text-xl-mobile md:font-xl">{content_title}</h3>
      <p className="s mt-8">{`${students.title} ${students.year}`}</p>
      <p className="s text-BLACK/60 mt-4">{students.value}</p>
      <p className="s mt-8">{target.title}</p>
      <p className="s text-BLACK/60 mt-4">{target.profile}</p>
      <CustomSwiper position={SwiperNavigationPosition.TOP_RIGHT} items={items} />
    </div>
  )
}

export default StudentProfile
