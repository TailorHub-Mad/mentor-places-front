/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
enum ETEXT_VARIANTS {
  XXL = 'xxl',
  XXL_ITALIC = 'xxl-italic',
  XXL_MOBILE = 'xxl-mobile',
  XL = 'xl',
  XL_ITALIC = 'xl-italic',
  XL_MOBILE = 'xl-mobile',
  L = 'l',
  L_ITALIC = 'l-italic',
  L_MOBILE = 'l-mobile',
  M = 'm',
  M_ITALIC = 'm-italic',
  M_MOBILE = 'm-mobile',
  S = 's'
}

export const fontFamily: Record<ETEXT_VARIANTS, [string, string]> = {
  xxl: ['arizona-mix-light', '--font-montserrat'],
  'xxl-italic': ['arizona-mix-bold-italic', '--font-montserrat'],
  'xxl-mobile': ['arizona-mix-light', '--font-montserrat'],
  xl: ['arizona-mix-light', '--font-montserrat'],
  'xl-italic': ['arizona-mix-bold-italic', '--font-montserrat'],
  'xl-mobile': ['arizona-mix-light', '--font-montserrat'],
  l: ['arizona-mix-light', '--font-montserrat'],
  'l-italic': ['arizona-mix-light-italic', '--font-montserrat'],
  'l-mobile': ['arizona-mix-light', '--font-montserrat'],
  m: ['arizona-mix-light', '--font-montserrat'],
  'm-italic': ['arizona-mix-light-italic', '--font-montserrat'],
  'm-mobile': ['arizona-mix-light', '--font-montserrat'],
  s: ['intrument-sans', '--font-montserrat']
}

enum ETEXT_SIZES {
  XXL = '80px',
  XXL_MOBILE = '48px',
  XL = '56px',
  XL_MOBILE = '48px',
  L = '48px',
  L_MOBILE = '32px',
  M = '32px',
  M_MOBILE = '24px',
  S = '16px'
}

export const fontSize: Record<ETEXT_VARIANTS, string> = {
  xxl: ETEXT_SIZES.XXL,
  'xxl-italic': ETEXT_SIZES.XXL,
  'xxl-mobile': ETEXT_SIZES.XXL_MOBILE,
  xl: ETEXT_SIZES.XL,
  'xl-italic': ETEXT_SIZES.XL,
  'xl-mobile': ETEXT_SIZES.XL_MOBILE,
  l: ETEXT_SIZES.L,
  'l-italic': ETEXT_SIZES.L,
  'l-mobile': ETEXT_SIZES.L_MOBILE,
  m: ETEXT_SIZES.M,
  'm-italic': ETEXT_SIZES.M,
  'm-mobile': ETEXT_SIZES.M_MOBILE,
  s: ETEXT_SIZES.S
}

enum ELINE_HEIGHT {
  XXL = '72px',
  XXL_MOBILE = '50px',
  XL = '72px',
  XL_MOBILE = '50px',
  L = '50px',
  L_MOBILE = '34px',
  M = '34px',
  M_MOBILE = '22px',
  S = '28px'
}

export const lineHeight: Record<ETEXT_VARIANTS, string> = {
  xxl: ELINE_HEIGHT.XXL,
  'xxl-italic': ELINE_HEIGHT.XXL,
  'xxl-mobile': ELINE_HEIGHT.XXL_MOBILE,
  xl: ELINE_HEIGHT.XL,
  'xl-italic': ELINE_HEIGHT.XL,
  'xl-mobile': ELINE_HEIGHT.XL_MOBILE,
  l: ELINE_HEIGHT.L,
  'l-italic': ELINE_HEIGHT.L,
  'l-mobile': ELINE_HEIGHT.L_MOBILE,
  m: ELINE_HEIGHT.M,
  'm-italic': ELINE_HEIGHT.M,
  'm-mobile': ELINE_HEIGHT.M_MOBILE,
  s: ELINE_HEIGHT.S
}
