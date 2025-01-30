import type { IFormatSchedulesBlockProps } from './ColumnFormatSchedulesBlock'
import { ASSET_FEATURES_CARD_HTML_DESCRIPTION_MOCK, ASSET_FEATURES_CARD_ICON_MOCK } from '@components/AssetFeaturesCard/mock'

export const COLUMN_FORMAT_SCHEDULES_TITLE_CARD_MOCK: IFormatSchedulesBlockProps = {
  title: 'Formatos y horarios',
  cards: [ASSET_FEATURES_CARD_HTML_DESCRIPTION_MOCK, ASSET_FEATURES_CARD_HTML_DESCRIPTION_MOCK, ASSET_FEATURES_CARD_HTML_DESCRIPTION_MOCK]
}

export const COLUMN_FORMAT_SCHEDULES_TITLE_CARD_WITH_ICON_MOCK: IFormatSchedulesBlockProps = {
  title: 'Oferta educativa',
  cards: [ASSET_FEATURES_CARD_ICON_MOCK, ASSET_FEATURES_CARD_ICON_MOCK, ASSET_FEATURES_CARD_ICON_MOCK]
}
