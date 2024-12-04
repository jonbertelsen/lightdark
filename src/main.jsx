import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Todos from './pages/Todos'
import TodoList from './components/TodoList'
import Login from './pages/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='todos' element={<Todos />}>
        <Route path='todolist' element={<TodoList />} />
      </Route>
      <Route path='login' element={<Login />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
