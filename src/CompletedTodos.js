import React from 'react'
import { useStore } from './store'

export default () => {
  const [state] = useStore()

  const completedTodos = state.todos.filter(todo => todo.complete)

  return (
    <>
      <h3>Completed</h3>
      {completedTodos.length === 0 && <p>None. Try toggling...</p>}
      {!!completedTodos.length && (
        <ul>{completedTodos.map(({ name }) => <li>{name}</li>)}</ul>
      )}
    </>
  )
}
