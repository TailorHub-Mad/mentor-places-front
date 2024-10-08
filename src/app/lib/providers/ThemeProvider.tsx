'use client'
import { createContext, useState, useEffect } from 'react'
import type { PropsWithChildren, FC } from 'react'

interface IThemeContext {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.add(storedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'dark' : 'default'

    document.documentElement.classList.add('transitioning')

    setTimeout(() => {
      document.documentElement.classList.remove(theme)
      document.documentElement.classList.add(newTheme)
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)

      setTimeout(() => {
        document.documentElement.classList.remove('transitioning')
      }, 500) // match the transition duration from CSS (0.5s)
    }, 100) // small delay to ensure transition effect starts smoothly
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContext
