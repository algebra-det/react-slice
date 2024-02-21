import Datatable from '@/components/Table/Datatable1'
import { Todo } from '@/types/Todo'

const UserTable = () => {
  const headers = ['ID', 'Title', 'Completed', 'UserId']
  return (
    <div className='p-3'>
      <div className='text-white text-2xl mb-2 mt-5'>UserTable</div>
      <Datatable
        url='some-url'
        headers={headers}
        render={(q: Todo) => (
          <>
            <td className='border-2 border-slate-300 text-slate-200'>{q.id}</td>
            <td className='border-2 border-slate-300 text-slate-200'>
              {q.title}
            </td>
            <td className='border-2 border-slate-300 text-slate-200'>
              {q.completed ? 'Yes' : 'No'}
            </td>
            <td className='border-2 border-slate-300 text-slate-200'>
              {q.userId}
            </td>
          </>
        )}
      />
    </div>
  )
}

export default UserTable
