import { breakpoints } from '@theme/foundations/breakpoints.theme'
import { useEffect, useState } from 'react'
import useWindowSize from './useWindowSize'

const useBreakpoint = () => {
  const { width } = useWindowSize()
  const [breakpoint, setBreakpoint] = useState({
    isMobile: false,
    isVerticalTablet: false,
    isLandscapeTablet: false,
    isDesktop: false
  })

  useEffect(() => {
    const ranges = {
      isMobile: `(max-width: ${breakpoints.sm})`,
      isVerticalTablet: `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
      isLandscapeTablet: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
      isDesktop: `(min-width: ${breakpoints.lg})`
    }

    const updateMatches = () => {
      setBreakpoint({
        isMobile: window.matchMedia(ranges.isMobile).matches,
        isVerticalTablet: window.matchMedia(ranges.isVerticalTablet).matches,
        isLandscapeTablet: window.matchMedia(ranges.isLandscapeTablet).matches,
        isDesktop: window.matchMedia(ranges.isDesktop).matches
      })
    }

    updateMatches()

    const mediaQueryLists = Object.values(ranges).map((range) => window.matchMedia(range))
    mediaQueryLists.forEach((mql) => mql.addEventListener('change', updateMatches))

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeEventListener('change', updateMatches))
    }
  }, [width])

  return breakpoint
}

export default useBreakpoint
