import React from 'react'
import { useStore } from './store'

export default () => {
  const [state] = useStore()

  return (
    <>
      <h3>Debug</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}
