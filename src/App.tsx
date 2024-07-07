import { useState } from 'react'
import './App.css'

type Todo = {
  id: number
  name: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector('input') as HTMLInputElement;
    const newTodo: Todo = {
      id: todos.length,
      name: input.value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    input.value = '';
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleRemoveTodo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>

      <div>
        <form onSubmit={handleAddTodo}>
          <input type="text" name="todo" />
          <button>Add Todo</button>
        </form>
      </div>

      {todos.map((todo) => (
        <div key={todo.id} className="item">
          <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
          <span className={todo.completed ? 'completed' : ''}>{todo.name}</span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App
