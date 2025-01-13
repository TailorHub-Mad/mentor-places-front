export type TAssetDetailType = 'duration' | 'format' | 'language' | 'campus' | 'startDate' | 'price' | 'rating'

export type TAssetDetailOptions = {
  [key in TAssetDetailType]: string
}
