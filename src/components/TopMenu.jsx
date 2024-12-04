import styled from 'styled-components'
import { NavLink } from 'react-router'

const MenuItems = styled.ul`
  display: flex;
  justify-content: start;
  gap: 1rem;
  list-style-type: none;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

const Item = styled.li`
  color: ${({ theme }) => theme.text};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    color: red; /* Makes text red on hover */
  }

  &.active {
    color: ${({ theme }) => theme.hover};
  }
`

function TopMenu() {
  return (
    <MenuItems>
      <li>
        <StyledNavLink to='/'>Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/todos'>Todos</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/login'>Login</StyledNavLink>
      </li>
    </MenuItems>
  )
}

export default TopMenu
