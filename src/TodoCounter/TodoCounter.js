import React from 'react'
import './todoCounter.css'
import { todoContext } from '../TodoContext'

function TodoCounter() {
  const {
    todosCompletados,
    total
  } = React.useContext(todoContext)
  return (
    <h1 className='todoCounter'>
      Has completado <span > {todosCompletados} </span>
      de <span> {total} </span>
      TODOS
    </h1>

  )
}
export { TodoCounter }

