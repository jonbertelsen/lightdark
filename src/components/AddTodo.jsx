import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  gap: 10px;
`

function AddTodo() {
  return (
    <>
      <h1>Add Todos</h1>

      <StyledForm>
        <label htmlFor='id'>Id</label>
        <input id='id' type='number' readOnly placeholder='id' />
        <label htmlFor='todo'>Todo</label>
        <input id='todo' type='text' placeholder='Enter todo text' />
        <label htmlFor='comment'>Comment</label>
        <input id='comment' type='text' placeholder='Comment' />
        <button type='submit'>Add Todo</button>
      </StyledForm>
    </>
  )
}

export default AddTodo
