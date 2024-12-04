import styled from 'styled-components'
import { useState } from 'react'

const StyledForm = styled.form`
  display: flex;
  gap: 10px;
`

function AddTodo() {
  const initialTodo = {
    todoitem: '',
    description: '',
  }
  const [todo, setTodo] = useState(initialTodo)

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.id]: e.target.value,
    })
  }

  const submitTodo = (e) => {
    e.preventDefault()
    const { todoitem, description } = todo
    alert(`Todo: ${todoitem}, Description: ${description}`)
    setTodo(initialTodo)
  }

  return (
    <>
      <h2>Add Todos</h2>

      <StyledForm onSubmit={submitTodo}>
        <label htmlFor='todo'>Todo</label>
        <input
          onChange={handleChange}
          id='todoitem'
          type='text'
          placeholder='Enter todo item text'
          value={todo.todoitem}
        />
        <label htmlFor='comment'>Description</label>
        <input
          onChange={handleChange}
          id='description'
          type='text'
          placeholder='Description'
          value={todo.description}
        />
        <button type='submit'>Add Todo</button>
      </StyledForm>
      <p>{JSON.stringify(todo)}</p>
    </>
  )
}

export default AddTodo
