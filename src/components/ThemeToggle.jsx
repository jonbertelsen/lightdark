import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <img
        style={{ width: '25px', cursor: 'pointer' }}
        onClick={toggleTheme}
        src='dark_light.svg'
        alt={theme === 'light' ? 'Dark' : 'Light'}
      />
      {children}
    </ThemeProvider>
  )
}

export default ThemeToggle
