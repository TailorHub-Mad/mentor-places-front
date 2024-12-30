import { AssetCardProps, AssetCardVariant } from '@components/asset-card/AssetCard'

export const MOCK_ASSET_CARD: AssetCardProps = {
  variant: AssetCardVariant.withIcons,
  data: {
    title: 'Máster universitario en Marketing Digital',
    universityName: 'Universidad Alfonso X el Sabio (UAX)',
    universityLogo: '',
    format: 'Online',
    language: 'Español',
    duration: '9 meses',
    ranking: 5,
    reviewScore: 4.4,
    price: '1000 €',
    ctaText: 'Más información'
  }
}

export const MOCK_ASSET_IMAGE_SRC =
  'https://s3-alpha-sig.figma.com/img/bdca/1b4c/79d6fc80ac6ce6457808bbf743ccbcd5?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c5yJjocY9UDNyera6ejm-rM0f2O5Xb8batmLO47EhFRMMnZq39viY5b8-xzCv01alW1Q8cvmMvbrVPKiCkBIL9qnrZWXYzSyjhRZv02LH6cgIAObJgAAreodSf2mxHqwvb3v4m-7pLIw7wCyAMkMFQ0SFxWA0yz6lFYBzj5-0sOEey8M5TrzypB4W-FzoRtv0qmpcxv3qDwAIbfvyNNlcvaZvUvtIFhjh~kHj9~11cFuIE6RDsik0BLZ-WdfOwKReABivLFwYSzGxT9BO9eSu8nQn0tGDgaTyw3jNuvxLhEmRnJ9iD~d54OonTie8N9IEWoRG1YCSve0HKR~gKujKQ__'
