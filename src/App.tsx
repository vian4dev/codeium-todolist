import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this component renders a todo list, with task name, completion state and uses the ID as key

type Todo = {
  id: number
  name: string
  completed: boolean
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]) 

  return (
    <>
    <div className="App">
      <h1>Todo List</h1>
    </div>

    {todoList.map(todo => (
      <div key={todo.id}>
        <input type="checkbox" checked={todo.completed} />
        <span>{todo.name}</span>
      </div>
    ))}
    </>
  )
}

export default App
