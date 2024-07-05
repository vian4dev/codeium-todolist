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

  // this function adds the event target todo the todolist array
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      todo: { value: string }
    }

    const name = target.todo.value
    setTodoList([...todoList, { id: todoList.length, name, completed: false }])
  }

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        {/* implement an input form tpo add a new todo
      and a button to add the todo to the list*/}
        <div>
          <form onSubmit={addTodo}>
            <input type="text" name="todo" />
            <button>Add Todo</button>
          </form>
        </div>
      </div>

      {todoList.map(todo => (
        <div key={todo.id}>{todo.name}</div>

      ))}
    </>
  )
}

export default App
