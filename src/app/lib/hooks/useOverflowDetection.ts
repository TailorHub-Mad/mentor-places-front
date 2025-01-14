import { useEffect, useRef, useState } from 'react'

export const useOverflowDetection = (value: string | undefined, placeholder: string | undefined) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      if (spanRef.current && parentRef.current) {
        const spanWidth = spanRef.current.offsetWidth
        const parentWidth = parentRef.current.offsetWidth
        setIsOverflowing(spanWidth > parentWidth)
      }
    }

    const observer = new ResizeObserver(checkOverflow)
    checkOverflow() // Initial check

    if (parentRef.current) {
      observer.observe(parentRef.current)
    }

    return () => observer.disconnect()
  }, [value, placeholder])

  return { isOverflowing, parentRef, spanRef }
}
