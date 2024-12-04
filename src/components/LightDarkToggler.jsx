function LightDarkToggler({ theme, toggleTheme }) {
  return (
    <>
      <img
        style={{ width: '25px', cursor: 'pointer' }}
        onClick={toggleTheme}
        src='/dark_light.svg'
        alt={theme === 'light' ? 'Dark' : 'Light'}
      />
    </>
  )
}

export default LightDarkToggler
