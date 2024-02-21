import React, { useState, useEffect, memo } from 'react'
import { Todo } from '@/types/Todo'

const CounterComponent = memo(Counter)

function Counter({ children }: { children?: React.ReactElement }) {
  console.log('Counter rendered')
  const [counter, setCounter] = useState(0)
  const [todo, setTodo] = useState({} as Todo)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      console.log('Effect ran')
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const todo = await res.json()
      setTodo(todo)
    })()
  }, [])

  return (
    <div>
      <h1 className='text-2xl'>Counter : {counter}</h1>
      <button
        className='my-2 border-2 border-slate-900 rounded bg-slate-900 px-4 py-1  mt-4 hover:border-slate-400'
        onClick={() => setCounter(counter + 1)}
      >
        Update Counter
      </button>
      <br />
      {JSON.stringify(todo)}
      <div className='mt-4'>{children}</div>
    </div>
  )
}

export default CounterComponent
