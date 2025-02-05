import type { InstitutionsLocationsFragment } from '../../../../graphql/generated/client'
import type { ICampusSliderItem } from '../CampusSlider/CampusSlider'

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

export const getCampusData = (institution_id: InstitutionsLocationsFragment): ICampusSliderItem[] =>
  (
    (institution_id?.institution_campuses || []).filter((elm) => {
      if (!elm) return false
      const { phone, campuses_trans, street_address, images, city, postal_code } = elm
      return Boolean(phone && campuses_trans?.[0]?.name && street_address && images && city && postal_code)
    }) as IRequiredCampusData[]
  ).map(({ phone, campuses_trans, street_address, images, postal_code, city }) => ({
    phone,
    name: campuses_trans[0].name,
    address: `${street_address}, ${postal_code}, ${city}`,
    href: '', // TODO - 'More info' button
    image: images
  }))

export const getBlocks = (
  headersAndData: {
    header: string | null | undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
  }[]
): { id: string; text: string }[] => {
  const blocks: { id: string; text: string }[] = []

  headersAndData.forEach((elm) => {
    if (elm.data && elm.header) blocks.push({ id: elm.header, text: elm.header })
  })

  return blocks
}
