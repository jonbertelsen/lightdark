import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyle from './styles/GlobalStyle'
import LightDarkToggler from './components/LightDarkToggler'
import styled from 'styled-components'
import TopMenu from './components/TopMenu'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 968px;
`

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        <header>
          <TopMenu />
          <LightDarkToggler theme={theme} toggleTheme={toggleTheme} />
        </header>
        <main>
          <h1>Hello Light and Dark World</h1>
          <p>This small demo is showing light and dark mode toggler.</p>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} | Light and Dark Mode Toggler</p>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default App
