import { useEffect, useState } from "react"

const themes = {
  dark: 'light',
  light: 'dark'
}

const useTheme = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const _theme = themes[theme]
    localStorage.setItem('theme', _theme)
    updateTheme(_theme)
  }

  const updateTheme = (name) => {
    setTheme(name)
    document.querySelector('html')
      ?.classList.remove(themes[name])
    
    document.querySelector('html')
      ?.classList.add(name)
  } 
  useEffect(() => {
    const _theme = localStorage.getItem('theme') || 'dark'
    updateTheme(_theme)
  }, [])

  return { theme, toggleTheme }
}

export default useTheme;