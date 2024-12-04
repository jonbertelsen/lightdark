import { NavLink, Outlet } from 'react-router'

function Todos() {
  return (
    <>
      <h1>Todos</h1>

      <p>This is the todos that we have. Click to see.</p>
      <NavLink to='todolist'>Todo List</NavLink>
      <Outlet />
    </>
  )
}

export default Todos
