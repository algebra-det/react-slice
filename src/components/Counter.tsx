import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1 className='text-2xl'>Counter : {counter}</h1>
      <button
        className='border rounded bg-slate-900 px-4 py-1  mt-4'
        onClick={() => setCounter(counter + 1)}
      >
        Update Counter
      </button>
    </div>
  )
}

export default Counter
