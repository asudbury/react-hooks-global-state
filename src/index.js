import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from './store'

import ToggleList from './ToggleList'
import CompletedTodos from './CompletedTodos'
import Debug from './Debug'

createStore({
  initialState: {
    todos: [
      { id: 1, name: 'Item 1', complete: false },
      { id: 2, name: 'Item 2', complete: false },
      { id: 3, name: 'Item 3', complete: false },
    ],
  },
})

const App = () => (
  <>
    <h1>React Hooks: Global state test</h1>
    <ToggleList />
    <CompletedTodos />
    <Debug />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
