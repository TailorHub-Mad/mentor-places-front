import type { TAssetDetailType } from '@interfaces/assetDetail.type'

export interface IAssetCardData {
  title: string
  universityName?: string
  universityLogo?: string
  imageSrc?: string
  ctaText?: string
  ctaHref?: string
  ranking?: number
  details?: IAssetCardDetail[]
}

export interface IAssetCardDetail {
  type: TAssetDetailType
  value: string | number
}
