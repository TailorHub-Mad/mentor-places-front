export type TAssetDetailType = 'duration' | 'format' | 'language' | 'campus' | 'startDate' | 'price' | 'rating'

export type IAssetDetailOptions = {
  [key in TAssetDetailType]: string
}
