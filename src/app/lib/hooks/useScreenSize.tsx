'use client'

import { useState, useEffect } from 'react'

// Define type for screen size
type ScreenSize = {
  screenWidth: number
  screenHeight: number
}

// Initial screen size constant
const initialScreenSize: ScreenSize = {
  screenWidth: typeof window !== 'undefined' ? window.innerWidth : 1280,
  screenHeight: typeof window !== 'undefined' ? window.innerHeight : 720
}

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(initialScreenSize)

  // Function to update screen size state
  const handleResize = () => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}
