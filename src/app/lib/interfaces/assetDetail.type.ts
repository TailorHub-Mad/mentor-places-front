export type TAssetDetailType = 'duration' | 'format' | 'language' | 'campus' | 'startDate' | 'price' | 'rating' | 'official'

export type TAssetDetailOptions = Partial<Record<TAssetDetailType, string>>
