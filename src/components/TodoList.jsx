import AddTodo from './AddTodo'
import styled from 'styled-components'

const StyledTodo = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  h3 {
    color: red;
  }
  li {
    border: 1px solid silver;
    padding: 10px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: antiquewhite;
    padding: 10px;
  }
  li:hover {
    background-color: bisque;
  }
`

function TodoList() {
  return (
    <>
      <h3>TodoList</h3>
      <StyledTodo>
        <li>
          <h3>Todo 1</h3>
          <p>Comment</p>
        </li>
        <li>
          <h3>Todo 2</h3>
          <p>Comment 2</p>
        </li>
        <li>
          <h3>Todo 3</h3>
          <p>Comment 3</p>
        </li>
        <li>
          <h3>Todo 4</h3>
          <p>Comment 4</p>
        </li>
      </StyledTodo>

      <AddTodo />
    </>
  )
}

export default TodoList
