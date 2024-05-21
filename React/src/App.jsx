import { useState } from "react"
import "./styles.css"
import { NewPlayerForm } from "./NewPlayerForm"

export default function App() {
  const [todos, setTodos] = useState([])

  function addPlayer(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewPlayerForm onSubmit={addPlayer} />
      <h1 className="header">Players</h1>
      <ul className="list">
        {todos.length === 0 && "No Players"}
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={e => toggleTodo(todo.id, e.target.checked)} 
              />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
