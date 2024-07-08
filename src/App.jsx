import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect }, React from "react"

function App() {
  const [todos, setTodos] = useState(['1', '2', '3', '4', '5', '6']) 

  const [todoValue, setTodoValue] = useState('') 

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  const handleAddTodos = (item) => {
    const newTodoList = [...todos, item]
    setTodos(newTodoList)  // update state with new list
    persistData(newTodoList)
  }

  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleEditTodos = (index) => {  
    const valueTodBeEdited = todos[index]
    setTodoValue(valueTodBeEdited)
    handleDeleteTodos(index)
  }
  useEffect(() => {
    if (!localStorage){
      return;
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return;
    } //localTodos

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} />
    </>
  )
}

export default App
