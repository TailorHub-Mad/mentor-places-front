'use client'

import Button from '@components/Button/Button'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState, type FC } from 'react'

const RICH_TEXT_MB = 16

interface IRichTextProps {
  content: string
  maxLines: number
  width?: string
}

// More styles can be added on 'rich-text.css'
const RichText: FC<IRichTextProps> = ({ content, maxLines, width }) => {
  const t = useTranslations()

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
        className="rich-text"
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: isExpanded ? 'unset' : maxLines.toString(),
          maxHeight: isExpanded ? 'none' : `${maxLines * (lineHeight + RICH_TEXT_MB)}px`
        }}
      />
      {isTruncated && (
        <Button variant="text" onClick={() => setIsExpanded(!isExpanded)} className="mt-4 text-[#666666] underline">
          {isExpanded ? t('actions.showLess') : t('actions.showMore')}
        </Button>
      )}
    </div>
  )
}

export default RichText
