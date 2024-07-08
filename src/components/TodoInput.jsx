import {useState} from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props
    
  return (
    <div>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} placeholder='enter Todos to begin' />
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }} >Add Todo</button>
    </div>
  )
}
