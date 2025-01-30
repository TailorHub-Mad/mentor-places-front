import type { IAssetFeaturesCardProps } from '@components/AssetFeaturesCard/AssetFeaturesCard'

export const ASSET_FEATURES_CARD_TITLE_MOCK: IAssetFeaturesCardProps = {
  title: 'Modalidad',
  description: 'En la Universidad Francisco Vitoria ofrece una amplia oferta de títulos en formato presencial, híbrido y online',
  tags: [
    { label: 'Presencial', number: 35 },
    { label: 'Híbrido', number: 10 },
    { label: 'Online', number: 1 }
  ]
}

export const ASSET_FEATURES_CARD_ICON_MOCK: IAssetFeaturesCardProps = {
  icon: 'campus',
  description: 'En la Universidad Francisco Vitoria ofrece una amplia oferta de títulos en formato presencial, híbrido y online',
  tags: [{ label: 'Presencial' }, { label: 'Híbrido' }, { label: 'Online' }]
}

export const ASSET_FEATURES_CARD_HTML_DESCRIPTION_MOCK: IAssetFeaturesCardProps = {
  ...ASSET_FEATURES_CARD_TITLE_MOCK,
  description: `
    <p><strong style="color: black">Presencial </strong><span style="opacity: .7; margin-bottom: 8px">Campus Alcobendas (Madrid) / Campus Valencia</span></p>
    <p><strong style="color: black;">Híbrido </strong><span style="opacity: .7">Campus Alcobendas (Madrid) + Campus On-line</span></p>
  `
}
