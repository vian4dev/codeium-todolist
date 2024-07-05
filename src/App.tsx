import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Todo = {
  id: number
  name: string
  completed: boolean
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      todo: { value: string }
    }

    const name = target.todo.value
    setTodoList([...todoList, { id: todoList.length, name, completed: false }])
    target.todo.value = ''
  }

  const toggleCompleted = (id: number) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
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
        <div key={todo.id}>
          {/* this checkbox should trigger the item update on the property completed */}
          <input type="checkbox" checked={todo.completed} onChange={() => {toggleCompleted(todo.id)} }/>
          {todo.name}
        </div>

      ))}
    </>
  )
}

export default App
