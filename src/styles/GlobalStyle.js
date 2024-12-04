import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: all 0.25s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
  }
  
  main {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 2rem 1rem;
    width: 100%;
    min-height: 80vh;
  }

  header {
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
    width: 100%;
  }

  footer {
    background-color: ${({ theme }) => theme.footer};
    color: ${({ theme }) => theme.text};
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.toggleBorder};
    width: 100%;
  }
`
export default GlobalStyle

