import { useEffect, useState } from 'react'
import DummyJson from '@/DummyTodos.json'

type TableProps<T> = {
  url: string
  headers: string[]
  render: (q: T) => JSX.Element
}

const Datatable = <T extends {id:string | number}>({
  url,
  headers = [],
  render
}: TableProps<T>) => {
  const [rows, setRows] = useState<T[]>([])
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      // const res = await fetch(url)
      // const data = await res.json()
      // setRows(data as T[])
      // console.log('URL: ', url)
      console.log('Dummy is: ', url);
      
      setRows((DummyJson as unknown[]).map(item => item as T))

    })()
  }, [url])

  return (
    <div className='text-white'>
      <table className='border-1 w-full border-slate-400 text-center'>
        <thead>
          <tr>
            {headers?.map(q => (
              <th key={q} className='border-2 border-slate-300'>{q}</th>
            ))}
          </tr>
        </thead>
        {/* <tbody>{rows?.map(q => render(q))}</tbody> */}
        <tbody>{rows?.map(q => (
          <tr key={q.id}>{render(q)}</tr>
        ))}</tbody>
      </table>
    </div>
  )
}

export default Datatable
