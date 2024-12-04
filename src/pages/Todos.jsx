import { NavLink, Outlet } from 'react-router'

function Todos() {
  return (
    <>
      <h1>Todos</h1>

      <p>This is the todos that we have. Click to see.</p>
      <p>
        <NavLink to='todolist'>Todo List</NavLink>
      </p>
      <Outlet />
    </>
  )
}

export default Todos
