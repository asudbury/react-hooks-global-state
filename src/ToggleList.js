import React from 'react'
import { useStore } from './store'

export default () => {
  const [state, setState] = useStore()

  const handleClick = id =>
    setState(prevState => ({
      ...prevState,
      todos: prevState.todos.map(
        todo =>
          todo.id === id
            ? {
                ...todo,
                complete: !todo.complete,
              }
            : todo
      ),
    }))

  return (
    <>
      <h3>Todos</h3>
      {state.todos.map(({ id, name, completed }) => (
        <p key={id}>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleClick.bind(this, id)}
            />
            {name}
          </label>
        </p>
      ))}
    </>
  )
}
