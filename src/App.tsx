import { useState } from 'react'
import './App.css'

type Todo = {
  id: number
  name: string
  completed: boolean
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  /**
   * Adds a new todo item to the todo list.
   *
   * @param {React.FormEvent} event - The form event triggered by submitting the form.
   * @return {void} This function does not return anything.
   */
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      todo: { value: string }
    }

    const name = target.todo.value
    setTodoList([...todoList, { id: todoList.length, name, completed: false }])
    target.todo.value = ''
  }

  /**
   * Toggles the completed status of a todo item with the given id.
   *
   * @param {number} id - The id of the todo item.
   * @return {void} This function does not return anything.
   */
  const toggleCompleted = (id: number) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  /**
   * Deletes an item from the todo list based on the provided id.
   *
   * @param {number} id - The id of the item to delete
   */
  const deleteItem = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  return (
    <>
      <div className="App">
        <h1>Todo List</h1>

        <div>
          <form onSubmit={addTodo}>
            <input type="text" name="todo" />
            <button>Add Todo</button>
          </form>
        </div>
      </div>

      {todoList.map(todo => (
        <div key={todo.id} className="item">
          <input type="checkbox" checked={todo.completed} onChange={() => {toggleCompleted(todo.id)} }/>
          <span className={todo.completed ? 'completed' : ''}>{todo.name}</span>
          <button onClick={() => { deleteItem(todo.id)} }>Delete</button>
        </div>

      ))}
    </>
  )
}

export default App
