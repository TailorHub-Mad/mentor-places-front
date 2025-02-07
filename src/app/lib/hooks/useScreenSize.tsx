'use client'

import { useState, useEffect } from 'react'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  })

  const handleResize = () => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}
