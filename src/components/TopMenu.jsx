import styled from 'styled-components'

const MenuItems = styled.ul`
  display: flex;
  justify-content: start;
  gap: 1rem;
  list-style-type: none;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

function TopMenu() {
  return (
    <MenuItems>
      <li>Home</li>
      <li>Todos</li>
      <li>Login</li>
    </MenuItems>
  )
}

export default TopMenu
