'use client'

import ShowMoreButton from '@components/ShowMoreButton'
import type { EColor } from '@theme/foundations/colors.foundations'
import { useEffect, useRef, useState, type FC } from 'react'

const RICH_TEXT_MB = 16

interface IRichTextProps {
  content: string
  maxLines?: number
  width?: string
  disableTruncate?: boolean
  color?: EColor
}

const MAX_LINES_DEFAULT = 30

// More styles can be added on 'rich-text.css'
const RichText: FC<IRichTextProps> = ({ content, maxLines = MAX_LINES_DEFAULT, width, disableTruncate, color }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isTruncated, setIsTruncated] = useState(false)
  const [lineHeight, setLineHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = contentRef.current
    if (element) {
      const computedLineHeight = parseFloat(getComputedStyle(element).lineHeight)
      setLineHeight(computedLineHeight)

      const maxHeight = lineHeight * maxLines

      if (element.scrollHeight > maxHeight) {
        setIsTruncated(true)
      }
    }
  }, [content, maxLines, lineHeight])

  return (
    <div style={{ width }}>
      <div
        ref={contentRef}
        className="rich-text leading-[28px]"
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          color,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: isExpanded || disableTruncate ? 'unset' : maxLines.toString(),
          maxHeight: isExpanded || disableTruncate ? 'none' : `${maxLines * (lineHeight + RICH_TEXT_MB)}px`
        }}
      />
      {isTruncated && !disableTruncate && <ShowMoreButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />}
    </div>
  )
}

export default RichText
