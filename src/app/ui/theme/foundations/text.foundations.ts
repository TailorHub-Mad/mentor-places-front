enum ETEXT_VARIANTS {
  XL = 'xl',
  L = 'l',
  M = 'm',
  M_MEDIUM = 'm-medium',
  S = 's',
  S_MEDIUM = 's-medium',
  S_LIGHT = 's-light',
  XS = 'xs'
}

export const fontFamily: Record<ETEXT_VARIANTS, [string, string]> = {
  xl: ['gt-planar-regular', 'sans-serif'],
  l: ['gt-planar-regular', 'sans-serif'],
  m: ['gt-planar-light', 'sans-serif'],
  'm-medium': ['gt-planar-medium', 'sans-serif'],
  s: ['gt-planar-regular', 'sans-serif'],
  's-medium': ['gt-planar-medium', 'sans-serif'],
  's-light': ['gt-planar-light', 'sans-serif'],
  xs: ['gt-planar-regular', 'sans-serif']
}

enum ETEXT_SIZES {
  XL = '20px',
  L = '18px',
  M = '16px',
  S = '14px',
  XS = '12px'
}

export const fontSize: Record<ETEXT_VARIANTS, string> = {
  xl: ETEXT_SIZES.XL,
  l: ETEXT_SIZES.L,
  m: ETEXT_SIZES.M,
  'm-medium': ETEXT_SIZES.M,
  s: ETEXT_SIZES.S,
  's-medium': ETEXT_SIZES.S,
  's-light': ETEXT_SIZES.S,
  xs: ETEXT_SIZES.XS
}

enum ELINE_HEIGHT {
  XL = '28px',
  L = '26px',
  M = '140%',
  S = '120%',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  XS = '120%'
}

export const lineHeight: Record<ETEXT_VARIANTS, string> = {
  xl: ELINE_HEIGHT.XL,
  l: ELINE_HEIGHT.L,
  m: ELINE_HEIGHT.M,
  'm-medium': ELINE_HEIGHT.M,
  s: ELINE_HEIGHT.S,
  's-medium': ELINE_HEIGHT.S,
  's-light': ELINE_HEIGHT.S,
  xs: ELINE_HEIGHT.XS
}
